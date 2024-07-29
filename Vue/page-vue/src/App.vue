<script setup>
import headerComponent from './components/headerComponent.vue';
</script>

<template>
  <header>
    <div class="header">
      <headerComponent/>
    </div>
  </header>

  
</template>


<style scoped>
header {
  background-color: rgb(92, 238, 226); /* Azul */
  padding: 10px;
  align-items: top;
}

.header {
  color: white;
  padding: 10px;
}



</style>
