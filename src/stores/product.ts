import { useCartStore } from './cart';
import { defineStore } from 'pinia';

const items = [
    {
        name: 'Shoes 1',
        imgUrl: 'https://api.lorem.space/image/shoes?w=100&h=100',
        price: 12.5,
        numberOfItem: 0
    },
    {
        name: 'Shoes 250',
        imgUrl: 'https://api.lorem.space/image/shoes?w=100&h=100',
        price: 20.5,
        numberOfItem: 0
    },
    {
        name: 'Shoes 360',
        imgUrl: 'https://api.lorem.space/image/shoes?w=100&h=100',
        price: 7,
        numberOfItem: 0
    }
]

export const useProductStore = defineStore({
    id: 'products',
    state: ()=>({
        products: items
    }),
    actions: {
        getAllProducts(){
            return this.products
        },
        addItemToCart(item: any) {
            const cartStore = useCartStore();
            cartStore.addToCart(item);
        }
    },
})