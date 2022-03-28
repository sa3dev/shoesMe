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
            try {
                const user = this.checkLogin(mail , pass)
                return user
                
            } catch (error) {
                
            }
        },

        checkLogin(userText: string , passText: string ) {
            if(userText === LoginSuccess.mail && passText === LoginSuccess.password) {
            
               return {
                    user: LoginSuccess.mail,
                    isAdmin: false,
                }
            }
        }
    },
}
</script>

<template>
    <div>
        <h2>Login</h2>

        <form class="form-class" @submit.prevent>

            <label for="">E-mail</label>
            <input type="text" v-model="loginText">{{ loginText}}

            <label label for="">Password</label>
            <input type="text" v-model="passw"> {{passw}}

            <button @click="loginTest(loginText , passw)"> Login </button>
        </form>
    </div>
</template>

<style>

.form-class {
    display: flex;

}
</style>