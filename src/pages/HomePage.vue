<script setup>

</script>

<template>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>

    <div class="first"></div>
    <div class="second"></div>
    <div class="third"></div>

    <button @click="$router.push({ path: '/about', hash: '#team', replace: true })">GO TO ABOUT</button>
</template>

<style scoped>
.first,
.second,
.third {
    height: 1000px;
    background-color: rebeccapurple;
    margin-bottom: 20px;
}
</style>