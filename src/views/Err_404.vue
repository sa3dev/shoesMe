<script setup>
</script>

<template>
    <div>
        <h2>Page Error</h2>
        <h3>404</h3>
        <h3>{{ $route.path }} Not found</h3>
    </div>
</template>


<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 1rem;
        padding: 1rem;
      
    }
</style>