import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import Helloworld from '../components/HelloWorld.vue'
import ProductsPage from '../pages/ProductsPage.vue'
import ProductPreviewPage from '../pages/ProductPreviewPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginPage from '../pages/LoginPage.vue'
import AdminLayout from '../layouts/AdminLayout.vue'
import OrderPage from '../pages/OrderPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'helloworld', component: Helloworld },
      { path: 'products', component: ProductsPage },
      { path: 'product-preview/:slug', component: ProductPreviewPage },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'products', component: ProductsPage },
      { path: 'orders', component: OrderPage },
    ]
  },
  { path: '/login', component: LoginPage },

  // { path: '/', component: HomePage },
  // { path: '/about', component: AboutPage },
  // { path: '/helloworld', component: Helloworld },
  // { path: '/products', component: ProductsPage },
  // { path: '/product-preview/:slug', component: ProductPreviewPage },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        top: 0,
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})