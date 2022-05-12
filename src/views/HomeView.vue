<script setup lang="ts" >
import Item from '../components/item.vue'
import { useProductStore } from '../stores/product'

const useproductStore = useProductStore()

</script>

<template>    
    <section class="py-10">
        <div class="flex w-full justify-around justify-items-start flex-wrap">
            <Item v-for="item of useproductStore.getAllProducts()" :item="item" />
        </div>
    </section>
</template>

