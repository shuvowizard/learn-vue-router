<script setup>

</script>

<template>
    <h1>Order Page</h1>
    <p>This is the order page.</p>

    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        <tr>
            <td>Product 1</td>
            <td>2</td>
            <td>$10.00</td>
        </tr>
        <tr>
            <td>Product 2</td>
            <td>1</td>
            <td>$5.00</td>
        </tr>
        <tr>
            <td>Product 3</td>
            <td>3</td>
            <td>$15.00</td>
        </tr>
    </table>

    <p>Total: $30.00</p><br>

    <RouterLink to="/">Go to Home</RouterLink>
</template>

<style scoped>
    table {
        width: 100%;
        border-collapse: collapse;
    }
</style>