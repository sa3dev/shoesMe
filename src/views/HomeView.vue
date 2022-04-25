<script lang="ts" >
import { useCartStore } from '@/stores/cart'
import Item from '../components/item.vue'
import { useProductStore } from '../stores/product'

export default  {
    components: { Item },
    setup() {
        const productStore = useProductStore()
        productStore.getAllProducts()
        return {
            productStore,
        }
    }
}
</script>

<template>    
    <section class="py-10">
        <div class="flex w-full justify-around justify-items-start flex-wrap">
            <Item v-for="item of productStore.getAllProducts()" :item="item" />
        </div>
    </section>
</template>

