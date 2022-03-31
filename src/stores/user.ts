import { defineStore } from 'pinia';

const loginSuccess = { mail: "sadev" , password: '1234'}

export const useUserStore = defineStore({
    id:"user",
    state: ()=>({
        user: undefined
    }),
    actions: {
        login(mail: string , passw: string) {

            if(mail === loginSuccess.mail && passw === loginSuccess.password ) {
                const testUserInLocalStorage = localStorage.getItem('userData') || null;
                const obj = {
                    user: mail ,
                    isAdmin: false
                }
                if( testUserInLocalStorage === null) {
                    this.user = obj

                    this.$router.push('/')
                } else {
                    this.user = JSON.parse(testUserInLocalStorage)
                }
            }
        },
        logout() {
            localStorage.removeItem('userData')
            this.user = undefined
            this.$router.push('/login')
        }
    },
    getters: {
        isUserAuth(state): boolean {
            return state.user !== undefined ? true : false
        }
    }
})