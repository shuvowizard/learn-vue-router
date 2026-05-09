<script setup>

</script>

<template>
    <h1>About Page</h1>
    <p>This is the about page.</p>

    <div class="first"></div>
    <div class="second"></div>
    <div class="third" id="team">Third - team</div>

    <button @click="$router.push({ path: '/' })">GO TO HOME</button>
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