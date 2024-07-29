<template>
    <div class="componente">
        <h1>hola {{ message }}</h1>
    </div>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=frVz4EZpR7g&list=PLGgUs9P1eAW3xqOcHYVBIqTquIHT1OZ3l&index=59">Pagina {{ message }}</a></li>
  </ul>
   
</template>

<script>
export default {
    data(){
        return{
            message: 1     
        }
    }
}
</script>