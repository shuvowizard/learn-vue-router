<script setup>
import NavBar from '../components/NavBar.vue'

</script> 

<template>
 
 <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

  <NavBar />

  <main>
    <RouterView />
  </main>

</template>

<style>

</style>