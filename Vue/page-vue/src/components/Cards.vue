<template>
    <div class="componente">

            <ul>
                <li><a href="#" @click.prevent="handleNewCard">Crear tarjeta</a></li>
            </ul>

    </div>
    <div class="contenedor-tarjetas">
        <div class="tarjetas">
            <div class="tarjeta" v-for="tarjeta in tarjetas" :key="tarjeta.id">
                <h2>{{ tarjeta.name }}</h2>
                <div class="items">
                    <div class="item" v-for="item in tarjeta.items" :key="item.id">
                        <router-link v-if="item.url" :to="item.url">{{ item.titulo }}</router-link>
                        <span v-else>{{ item.titulo }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
</template>


<script setup>
import { reactive } from 'vue';

let tarjetas = reactive([
  {
    id: crypto.randomUUID(),
    name: 'tarjeta 1',
    items: [
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 1',
        url: '#'
      },
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 2'
      },
    ]
  },
  {
    id: crypto.randomUUID(),
    name: 'tarjeta 2',
    items: [
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 1'
      },
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 2'
      },
    ]
  }
]);

function handleNewCard(){
    const name = prompt('Nuevo nombre');
    if(!!name){
    tarjetas.push({
    id: crypto.randomUUID(),
    name: name,
    items: [
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 1',
      },
      {
        id: crypto.randomUUID(),
        titulo: 'pagina 2'
      },
    ]
     });
    }
}

</script>

<style scoped>
.tarjetas{
    display:flex;
    gap: 10px;
}

.tarjeta{
    background: #efefef;
    padding: 10px;
}
.items{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.item{
    background-color: white;
    padding: 10px;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>