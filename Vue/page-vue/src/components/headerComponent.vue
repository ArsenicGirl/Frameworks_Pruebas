<template>
    <div class="componente">
        <h1>inserte nombre de empresa {{ framework }}</h1>
    </div>

   
</template>

<script>
export default {
    data(){
        return{
            framework:'vue',
           
        }
    },
    /*methods: {
        toggleVisibility(){
            this.isVisible = !this.isVisible;
        }
    }*/
}
</script>


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
