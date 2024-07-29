<script setup>
import headerComponent from './components/headerComponent.vue';
import Vinculos from './components/Vinculos.vue';
import Cards from './components/Cards.vue';
</script>

<template>
  <header>
    <div class="header">
      <headerComponent/>
    </div>
  </header>
  <ul>
      <li><a href="/Pag2">Pagina </a></li>
  </ul>
  <ul>
      <li><a href="https://www.youtube.com/watch?v=frVz4EZpR7g&list=PLGgUs9P1eAW3xqOcHYVBIqTquIHT1OZ3l&index=59">Pagina {{ message }}</a></li>
  </ul>
  <main>
    <Vinculos/>
    <Cards/>
  </main>

  
</template>


<style scoped>
header {
  background-color: rgb(238, 138, 92); /* Azul */
  padding: 10px;
  align-items: top;
}

.header {
  color: white;
  padding: 10px;
}



</style>
