import { defineStore } from "pinia";
import type { Item } from "./../models/item";

export type RootCartState = {
    numberOfItem: number,
    cart: Item[]
  };

export const useCartStore = defineStore( 'cart' ,{
    state: (): RootCartState =>({
        numberOfItem: 0,
        cart: []
    }),
    getters: {
        numberOfItemsInCart: (state) => { 
            return state.cart.reduce(( acc , val ) => acc + val.numberOfItem, 0)
        }, 
        getStatusCart: (state) => {
            return state.cart.length>0 ? true : false
        }
      },
    actions: {
        addToCart(item: any, numberOfItemSelected: number ): void {

            const newItem: Item = {
                ...item
            }
            newItem.numberOfItem = numberOfItemSelected
            newItem.totalPrice = newItem.price ?  newItem.price * newItem.numberOfItem : 0

            this.numberOfItem > 0 ? this.numberOfItem + numberOfItemSelected : this.numberOfItem = numberOfItemSelected

            this.cart.push(newItem)
        },
        getCart(): Item[] {
            return this.cart
        },
        resetCart(): void {
            return this.$reset()
        },
        removeItemFromCart(item: Item): void{
            const i = this.cart.lastIndexOf(item)
            if (i > -1) this.cart.splice(i, 1)
        },
      
    },
})