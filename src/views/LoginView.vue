<script setup lang="ts">

import { ref } from 'vue';
import { useUserStore } from "@/stores/user";
const userStore = useUserStore()

const loginText = ref('sadev')
const passw = ref('1234')

// On déclare dans le setup notre submitHandler qu'on expose a la vue :)
const onSubmitTest = async () => {
    await userStore.login(loginText.value , passw.value)
}

// Expose 
defineExpose({
    onSubmitTest
})

</script>


<template>
    <section>
    
        <div class="py-8">
            <form 
                autocomplete="on" 
                class="max-w-20 rounded bg-aliceblue shadow-lg p-10 " 
                @submit.prevent="onSubmitTest()">


                <h2>Login  <span> ( loginSucss : "sadev" , password: '1234 )</span></h2>
                
                <label for="">E-mail</label>
                <input class="w-full border-2  border-black-400" type="text" v-model="loginText">

                <label label for="">Password</label>
                <input class="w-full border-2  border-black-400" type="text" v-model="passw">
                
                <div class="flex justify-center">
                    <button
                        type="submit"
                        class="font-mono py-5 px-8 bg-teal-700 rounded text-center"> 
                        Login 
                    </button>
                </div>
                
            </form>
        </div>
        
    </section>
</template>
