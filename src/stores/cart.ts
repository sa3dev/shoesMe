import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cart',
    state :()=>({
        numberOfItem: 0,
        cart: []
    }),
    getters: {
        numberOfItemsInCart: (state) => { 
            return state.cart.reduce(( acc , val ) => acc + val.numberOfItem, 0)
        }, 
      },
    actions: {
        addNumberOfItem() {
            if(this.numberOfItem <=0) return
            this.numberOfItem++
        },
        addToCart(item: any) {
            this.cart.push(item)
        },
        getCart() {
            return this.cart
        },
        resetCart() {
            return this.$reset()
        },
        removeItemFromCart(item: any){
            const i = this.cart.lastIndexOf(item)
            if (i > -1) this.cart.splice(i, 1)
        },
        getStatusCart() {
            return this.cart.length>0 ? true : false
        }
    }

})