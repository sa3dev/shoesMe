import { defineStore } from 'pinia';


type User = {
    user: string,
    isAdmin: boolean
}

type UserState = {
    user: User,
    isUserConnected: boolean
}

const loginSuccess = { mail: "sadev" , password: '1234'}

export const useUserStore = defineStore({
    id:"user",
    state: (): UserState =>({
        user: {
            user: '',
            isAdmin: false
        } ,
        isUserConnected: false
    }),
    actions: {
        login(mail: string , passw: string) {
            
            if(mail === loginSuccess.mail && passw === loginSuccess.password ) {
                const obj = { user: mail , isAdmin: true }
                this.user = obj
                this.isUserConnected = true

                //TODO 
                //Side effect apres l'authentification
                localStorage.setItem('userData' , JSON.stringify(obj))   
                localStorage.getItem('userData') !== null ? this.$router.push('/') :  window.confirm('Error in log. Please retry')
            }
        },
        logout() {
            let answer = window.confirm('Want to log out ?')

            if(answer) {
                this.user = {
                    user: '',
                    isAdmin: false
                }
    
                localStorage.removeItem('userData')
                this.isUserConnected = false

                this.$router.push('/')
            }
            
    
        }
    }
})