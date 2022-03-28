<script lang="ts">
import formTestVue from '../components/formTest.vue';
import contactFormVue from '../components/contactForm.vue'; 


export default {

  components: {formTestVue , contactFormVue}
}

</script>

<template>
  <main>

      <div>
        <!-- <formTestVue /> -->
      </div>
      <div>
        <contactFormVue />
      </div>
  </main>
</template>


<style scoped>
main {
  padding: 2rem;
}

</style>