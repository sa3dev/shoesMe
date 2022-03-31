<script lang="ts">
import { useUserStore } from '@/stores/user'
import { mapActions , mapState } from 'pinia'

export default {

    data() {
        return {
            loginText: 'sadev',
            passw: '1234',
            isActive: Boolean
        }
    },
    methods: {
         ...mapActions(useUserStore, ["login"]),
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
                        @click="login(loginText , passw)"> 
                        
                        Login 
                    </button>
                </div>
                
            </form>
        </div>
        
    </section>
</template>
