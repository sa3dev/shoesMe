<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'

const cartStore = useCartStore()

const totalOfItemsPrice = (price: number , number: number ): number => {
    return price * number
}

const totl = computed((price: number , numberItem: number)=> price * numberItem)
defineExpose({
    totalOfItemsPrice,
    totl
})
</script>

<template>
    <section>

    <h2>Card resume</h2>
        <div class="resumeCart" v-if="cartStore.getCart() && cartStore.cart.length">
            <button 
            class="btnReset"
            @click="cartStore.resetCart()" 
            >Reset Cart</button>

            <div class="cart mt-10" v-for="item of cartStore.cart" >
                <ul>
                {{ typeof item.price }}
                    <li class="cart-detail mt-2" > 
                         <p>
                         {{item.name}} x {{item.numberOfItem}} 
                         </p>
                         <span style="margin:auto">-</span>  
                         <p> Price: {{ item.price }}$</p>   
                         <button @click="cartStore.removeItemFromCart(item)"> Remove </button>  
                    </li>
                </ul>

                <div class="total-resume">
                    total {{ totalOfItemsPrice( item.price , item.numberOfItem) }}$
                </div>

            </div>
        </div>
        <div v-else >
            <h2 style="text-align: center; margin:1rem">No items selected</h2>
        </div>
    </section>
</template>


<style scoped>

.cart {
    border: 1px solid lightgrey ;
    border-radius: 3px;
    box-shadow: 2px 2px 2px lightslategray;
    padding: 1rem;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
}

.cart-detail {
    display: flex;
    justify-content: space-evenly;
}

.cart-detail button{
    margin-left: auto
}

.total-resume {
    text-align: center;
    background: aliceblue;
    width: 30%;
    margin: 1rem auto;
}

.btnReset {
    display: flex;
    margin: 0 auto;
    background: cadetblue;
    padding: 0.5rem 2rem;
    border-radius: 5px;
}
</style>