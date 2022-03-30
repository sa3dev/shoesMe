<script lang="ts" >
import Item from '../components/item.vue'
import { useProductStore } from '../stores/product'

export default  {
    components: { Item },
    setup() {
        const productStore = useProductStore()
        const products = productStore. getAllProducts()

        return {
            productStore,
            products
        }
    },
    methods: {
        addProductToCart(item: any) {
            this.productStore.addItemToCart(item)
        },
    },
}
</script>


<template>    
    <section class="py-10">
        <div class="flex w-full justify-around justify-items-start flex-wrap">
            <Item v-for="item of products" :item="item" @item="addProductToCart(item)" />
        </div>

    </section>
</template>

