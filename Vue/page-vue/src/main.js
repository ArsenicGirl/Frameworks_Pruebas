//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            name: "home",
            component: App,
        },
        {
            path:"/pag2",
            name: "pag2",
            component: () => import("./views/Pag2.vue"),
        },

    ]
});


const app = createApp(App)

app.use(createPinia())

app.mount('#app')
