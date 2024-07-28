<template>
    <div class="componente">
        <h1 v-if="isVisible">{{ message }}</h1>
      <button v-on:click="toggleVisibility"> Toggle Visibility</button>
    </div>

    <ul>
        <li v-for="item in list" :key="item.id">{{  item.text }}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            message:'Holi',
            isVisible: true,
            list:[
            {id: 1, text: 'First item'},
            {id: 2, text: 'Seconditem'},
            {id: 3, text: 'Third item'}
        ]
        }
    },
    methods: {
        toggleVisibility(){
            this.isVisible = !this.isVisible;
        }
    }
}
</script>