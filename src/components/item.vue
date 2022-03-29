<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ['item'],
    emits: ['countSingleItem' , 'item'] , 

    data() {
        return {
            countSingleItem: 0
        }
    },
    methods:{
        priceSelectedItem: ( price: number )=> {
            return price * +(this.countSingleItem)
        },
        increment: ()=>{
            this.countSingleItem++
            this.$emit('countSingleItem')
        },
        decrement(){
            this.countSingleItem--
            this.$emit('countSingleItem')
        }, 
        sendItemToCart(item: any) {
            item.numberOfItem = this.countSingleItem
            this.$emit( 'item' , {
                name: item.name,
                imgUrl: item.imgUrl,
                price: item.price,
                numberOfItem: item.numberOfItem
            })
            this.countSingleItem = 0;
        }
    },
})
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg p-5 m-6 border border-indigo-600 relative overflow-visible" >

        <h2 class="text-center p-3">{{  item.name }}</h2>
        <div style="width: 100%;">
            <img src="/images/image1.jpg" style="width:100%" >
        </div>     

        <div class="absolute -bottom-8 right-4 hover:right-6">
            <div class="bg-orange-400 text-white px-8 py-4 border border-indigo-600 ">
                <span class="">{{ item.price }} $ </span>
            </div>
        </div>

        <div class="flex m-1 justify-center items-baseline mt-4 mb-4">
            <button class="bg-indigo-500 p-3 rounded-md w-12 cursor-pointer" @click="this.increment">+</button>
            <span class="m-2">
                {{ this.countSingleItem }}
            </span> 
            <button class="bg-indigo-500 p-3 rounded-md w-12 cursor-pointer" :disabled="(this.countSingleItem <= 0)" @click="decrement">-</button>    
        </div>
        <hr>
        <div v-if="this.countSingleItem > 0">
            {{ priceSelectedItem(item.price) }}$
        </div>
        
        <div class="flex justify-center p-8">
            <button 
            class="bg-cyan-600 p-4 rounded-md cursor-not-allowed"
            :class="{'cursor-not-allowed': this.countSingleItem <= 0 }"

            :disabled="(this.countSingleItem <= 0)" @click="sendItemToCart(item)">
                Add To Cart
            </button>
        </div>
    </div>
</template>