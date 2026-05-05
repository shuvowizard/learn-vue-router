import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import Helloworld from './components/HelloWorld.vue'
import ProductsPage from './components/ProductsPage.vue'

const routes = [
    {path: '/', component: HomePage},
    { path: '/about', component: AboutPage },
    { path: '/helloworld', component: Helloworld },
    { path: '/products', component: ProductsPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})