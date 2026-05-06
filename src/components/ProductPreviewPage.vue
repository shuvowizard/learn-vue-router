<script setup>
import { useRoute, useRouter } from 'vue-router'
import products from '../../constants/data.js'

const route = useRoute()
const router = useRouter()

const product = products.find(p => p.slug === route.params.slug)

// if (!product) {
//   router.push({
//     name: 'NotFound'
//   })
// }

</script>

<template>
    <h1>Product Preview Page</h1>
    <p>This is the product preview page.</p> <br>

  <div v-if="product">
    <h2>Name: {{ product.name }}</h2>
    <p>Description: {{ product.description }}</p>
    <h3>Price: ${{ product.price }}</h3>
  </div>

  <div v-else class="fallback">
    <h2>❌ Product not found!</h2>
    <p>Redirecting in 2 seconds...</p>
    <router-link to="/">🏠 Go Home</router-link>
  </div>
</template>