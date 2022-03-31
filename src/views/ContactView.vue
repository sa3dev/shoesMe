<script lang="ts">
import formTestVue from '../components/formTest.vue';
import contactFormVue from '../components/contactForm.vue'; 


export default {
  components: {formTestVue , contactFormVue}
}

</script>

<template>
  <section class="p-10">
        <div class="test">
          <section class="gap-8 columns-3" >
          
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="w-full"></div>

          </section>
          <!-- <contactFormVue /> -->
        
        </div>
  </section>
</template>


<style scoped>

  .test div {
    height: 10rem;
    width: 10rem;
    background-color: bisque;
    border: 1px solid black;
  }
</style>