<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCartStore } from './stores/cart';
import { useUserStore } from './stores/user'
const userStore = useUserStore()
const cartStore = useCartStore()

const { numberOfItemsInCart } = storeToRefs(cartStore)

</script>

<template>
  <header>
    <div class="flex flex-wrap items-center justify-between p-4 ">
      <nav>
        <RouterLink class="m-5" activeClass="active" to="/" >Home</RouterLink>
        <RouterLink class="m-5" activeClass="active" to="/employee">Our Employee</RouterLink>
        <RouterLink class="m-5 cart" activeClass="active" to="/cart">
          Cart  <span v-if="numberOfItemsInCart>0" class="nmbItemToCart">{{numberOfItemsInCart}}</span>
        </RouterLink> 
       
      </nav>
      <div v-if="!userStore.isUserConnected"> 
        <RouterLink activeClass="active" to="/login">Login</RouterLink>
      </div>
      <div v-if="userStore.isUserConnected">
        <button @click="userStore.logout() ">Logout</button>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

/*
  WRAPPER
*/
html {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.wrapper {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn {
  padding: 1rem 2rem;
  background-color : cornflowerblue;
  color: #fff;
  border: 1px solid cornflowerblue ;
  border-radius: 3px;
}

a {
  text-decoration: none;
  color: #2c3e50;
  margin-left: 1rem;
  padding: 1rem;
  align-items: center;

}

a:hover , .active{
  color: #fff;
  background-color:#2c3e50 ;
}

</style>
