<script lang="ts">
import { useCartStore } from '../stores/cart'
import { mapState , mapActions } from 'pinia'
import Item from '../components/item.vue'
import { useProductStore } from '../stores/product'

export default {
    components: { Item },
    data() {
        return {
        };
    },
    watch() {
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart']),
    },
    computed: {
        ...mapState(useProductStore, ["products"]),
    }
}
</script>


<template>    
    <section class="py-10">
        <div class="flex justify-between justify-items-start flex-wrap">
            <div class="" v-for="item of products">
                <Item :item="item" @item="addToCart(item)" />
            </div>
        </div>

    </section>
</template>

<style scoped>

section{
    display: flex;
    justify-content: center;
}

.allItems{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.card{
    margin: 1rem ;
    padding: 1rem;
    border: 1px solid grey;
    width: 17rem;
}

.card img {
    width: 100%
}
</style>