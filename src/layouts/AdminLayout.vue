<script setup>

</script>

<template>
 
 <h1>Admin Layout!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <nav>
    <RouterLink to="/admin/products">Products</RouterLink>
    |
    <RouterLink to="/admin/orders">Orders</RouterLink>
  </nav>

  <main>
    <RouterView />
  </main>

</template>

<style>

</style>