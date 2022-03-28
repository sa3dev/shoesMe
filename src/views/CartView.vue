<script lang="ts">
import { mapActions , mapState } from 'pinia'
import { useCartStore } from '../stores/cart'

export default {
    data() {
        return {
            counterItem: 0,
            countSingleItemSelected: 0,
        };
    },
    methods: {
        ...mapActions(useCartStore, ["resetCart"]),  
        ...mapActions(useCartStore, ["removeItemFromCart"])  
    },
    computed: {
        ...mapActions(useCartStore , ['getCart']),
    }
}
</script>

<template>
    <section>

    <h2>Card resume</h2>
        <div class="resumeCart" v-if="getCart && getCart.length">
            <button @click="resetCart" >Reset Cart</button>

            <div class="cart" v-for="item of getCart">
                <ul>
                    <li class="cart-detail"> 
                         <p>
                         {{item.numberOfItem}} x {{item.name}}
                         </p>
                         <span>-</span>  
                         <p>{{ item.price }}$</p>   
                         <button @click="removeItemFromCart(item)"> Remove </button>  
                    
                    </li>
                         
                </ul>

                <div class="total-resume">
                    total {{item.price * item.numberOfItem}}$
                </div>

            </div>
        </div>
        <div v-else >
            <h2 style="text-align: center; margin:1rem">No items selected</h2>
        </div>
    </section>
</template>


<style>

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

</style>