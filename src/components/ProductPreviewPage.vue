<script setup>
import { useRoute } from 'vue-router'
import products from '../../constants/data.js'

const route = useRoute()

const product = products.find(p => p.slug === route.params.slug)
</script>

<template>
    <h1>Product Preview Page</h1>
    <p>This is the product preview page.</p> <br>

  <div v-if="product">
    <h2>Name: {{ product.name }}</h2>
    <p>Description: {{ product.description }}</p>
    <h3>Price: ${{ product.price }}</h3>
  </div>

  <p v-else>Product not found</p>
</template>