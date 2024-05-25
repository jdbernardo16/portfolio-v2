import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router"
import './fonts/stylesheet.css'
import './style.css'
import App from './App.vue'
import Home from "./views/home/Index.vue"
import Archive from "./views/archive/Index.vue"

const routes = [
    {
      path: "/portfolio-v2/",
      name: "Home",
      component: Home,
    },
    {
      path: "/portfolio-v2/archive",
      name: "Archive",
      component: Archive,
    },
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

createApp(App).use(router).mount('#app')
