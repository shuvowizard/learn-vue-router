<script setup>

</script>

<template>
 
 <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
     |
    <RouterLink to="/about">About</RouterLink>
      |
    <RouterLink to="/helloworld">HelloWorld</RouterLink>
      |
    <RouterLink to="/products">Products</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

</template>

<style>

</style>