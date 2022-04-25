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
                const obj = {
                    user: mail ,
                    isAdmin: true
                }
            
                localStorage.setItem('userData' , JSON.stringify(obj))
                                    
                localStorage.getItem('userData') !== null ? this.$router.push('/') :  window.confirm('Error in log. Please retry')
            }
        },
        logout() {
            localStorage.removeItem('userData')
            this.user = undefined

            let answer = window.confirm('Want to log out ?')
            if(answer) {
                this.$router.push('/')
            }
        }
    },
    getters: {
        isUserAuth(state): boolean {
            return state.user !== undefined ? true : false
        }
    }
})