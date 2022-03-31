<script lang="ts">
const LoginSuccess = { mail: "sadev" , password: '1234'}

export default {

    data() {
        return {
            loginText: '',
            passw: '',
            isActive: Boolean
        }
    },
    methods: {
        loginTest(mail: string , pass: string ) {
            console.log('test login => '+ mail ,pass)
            try {
                const user = this.checkLogin(mail , pass)
                user?.then((test) => {
                    console.log(test)

                    return this.$router.push({ name: 'login', query: { redirect: '/path' } })
                })
                .catch(err => console.log(err))
                
                
            } catch (error) {
                console.log(error)
            }
        },

        checkLogin(userText: string , passText: string ) {
            if(userText === LoginSuccess.mail && passText === LoginSuccess.password) {
                const obj = {
                    user: LoginSuccess.mail,
                    isAdmin: false,
                }
                return new Promise((resolve , reject) => {
                    return resolve(obj)
                })
            }else { 

            }
            
        }
    },
}


</script>

<template>
    <section>
    
        <div class="py-8">
            <form  class="max-w-20 rounded bg-aliceblue shadow-lg p-10 " @submit.prevent >
                <h2>Login  <span> ( loginSucss : "sadev" , password: '1234 )</span></h2>
                
                <label for="">E-mail</label>
                <input class="w-full border-2  border-black-400" type="text" v-model="loginText">

                <label label for="">Password</label>
                <input class="w-full border-2  border-black-400" type="text" v-model="passw">

                <div class="flex justify-center">
                    <button
                        class="font-mono text-center py-5 px-8 bg-teal-700 rounded text-center"
                        @click="loginTest(loginText , passw)"> 
                        
                        Login 
                    </button>
                </div>
                
            </form>
        </div>
        
    </section>
</template>
