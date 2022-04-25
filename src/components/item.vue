<script lang="ts" setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";

defineProps(['item'])
let countItem = ref(0)
const cartStore = useCartStore()

</script>

<template>
    <div class="rounded overflow-hidden shadow-lg p-5 m-6 border border-indigo-600 relative overflow-visible " >

        <!-- ITEM IMAGE  -->
        <h2 class="text-center p-3">{{  item.name }}</h2>
        <div style="width: 100%;">
            <img src="/images/image1.jpg" style="width:100%" >
        </div>     

        <!-- ITEM PRICE -->
        <div class="absolute -bottom-8 right-4 hover:right-6">
            <div class="bg-orange-400 text-white px-8 py-4 border border-indigo-600 ">
                <span class="">{{ item.price }} $ </span>
            </div>
        </div>

        <!-- ITEM COUNT ITEM -->
        <div class="flex m-1 justify-center items-baseline mt-4 mb-4">
            <button class="bg-indigo-500 p-3 rounded-md w-12 cursor-pointer" @click="countItem++">+</button>
            <span class="m-2">
                {{ countItem }}
            </span> 
            <button 
                class="bg-indigo-500 p-3 rounded-md w-12 cursor-pointer" 
                :disabled="(countItem <= 0)" 
                @click="countItem--">-</button>    
        </div>
        <hr>

        <!-- PRICE SELECTED ITEM  -->
        <div class="text-3xl text-center p-5" v-if="countItem > 0">
            {{countItem * item.price }}$
        </div>      

        <!-- SEND ITEM TO CART -->
        <div class="flex justify-center p-8">
            <button 
            class="bg-cyan-600 p-4 rounded-md"
            @click="cartStore.addToCart(item , countItem); countItem = 0"
            :disabled="(countItem <= 0)" >
                Add To Cart
            </button>
        </div>
    </div>
</template>