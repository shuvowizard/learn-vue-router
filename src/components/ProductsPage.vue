<script setup>
import products from '../../constants/data.js';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <h1>Products Page</h1>
    <p>Here are some of our products:</p>

    <div class="grid">
      <div class="card" v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p class="desc">{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>

        <!-- <button class="btn" @click="$router.push(`/product-preview/${product.slug}`)">
          View Details
        </button> -->

        <RouterLink :to="`/product-preview/${product.slug}`" class="btn">
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.card {
  padding: 16px;
  border-radius: 12px;
  background: #292533ff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.desc {
  font-size: 14px;
  margin: 10px 0;
}

.price {
  font-weight: bold;
  margin-bottom: 12px;
}

.btn {
  display: inline-block;
  padding: 8px 12px;
  background: #42b883;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}

.btn:hover {
  background: #369870;
}
</style>
