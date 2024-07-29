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
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/pag2">Go to pag2</RouterLink>
  </nav>
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
  background-color: rgb(92, 238, 226); /* Azul */
  padding: 10px;
  align-items: top;
}

.header {
  color: white;
  padding: 10px;
}



</style>
