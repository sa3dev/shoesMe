import { defineStore } from 'pinia';

type User = {
    user: string,
    isAdmin: boolean
}

const loginSuccess = { mail: "sadev" , password: '1234'}

export const useUserStore = defineStore({
    id:"user",
    state: ()=>({
        user: null as User | null,
        isUserConnected: false
    }),
    actions: {
        login(mail: string , passw: string) {
            
            if(mail === loginSuccess.mail && passw === loginSuccess.password ) {
                const obj = { user: mail ,isAdmin: true }
                this.user = obj
                this.isUserConnected = true
                localStorage.setItem('userData' , JSON.stringify(obj))   
                localStorage.getItem('userData') !== null ? this.$router.push('/') :  window.confirm('Error in log. Please retry')
            }
        },
        logout() {
            localStorage.removeItem('userData')
            this.user = null
            this.isUserConnected = false
            let answer = window.confirm('Want to log out ?')

            if(answer) {
                this.$router.push('/')
            }
        },
        checkUserInLocalStorage(): boolean {
            if(localStorage.getItem('userData')) {
                this.user = JSON.parse(localStorage.getItem('userData'))
                this.isUserConnected = true
                return true
            }
            return false
        },
    }
})