<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { mapState } from 'pinia'
import { useCartStore } from './stores/cart'

export default {
  data() {
    return {
      show: true,
      test: 'Old String ',
      dataUser: {
        name: 'paul',
        age: 25
      }
    }
  },
  watch:{
    test(old: any , newVal: any) {
      console.log('old ', old);
      console.log('new ' , newVal)
      // console.log(this.$route)
    }
  }, 
  mounted() {
    
    // console.log(this.dataUser)
    // this.dataUser.age = 55
    // console.log(this.dataUser)
  },

  methods: {
    getCart() {
      mapState(useCartStore , ['getStatusCart'])
    },
    getRut() {
      // console.log(this.$route)
      this.dataUser.age++;
      console.log(this.dataUser)
      this.test = 'New strinf in Get ' + this.dataUser.age

    }
  },
}

</script>

<template>
  <header>
    <div class="flex flex-wrap p-1 items-center justify-between  p-4">
      <nav>
        <RouterLink class="m-5 " activeClass="active" to="/" >Home</RouterLink>
        <RouterLink class="m-5" activeClass="active " to="/contact">Contact</RouterLink>
        <RouterLink class="m-5" activeClass="active" to="/our-store">Our stores</RouterLink>
        <RouterLink class="m-5" activeClass="active" to="/employee">Our Employee</RouterLink>
        <RouterLink class="m-5" activeClass="active" to="/cart" v-on:click="getRut()">Cart</RouterLink>

      </nav>
      <div> 
          <RouterLink  activeClass="active" to="/login" v-if="show">Login</RouterLink>
          <button v-else >
            <span>
              <i></i>
              Logout
            </span>  
          </button>
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
