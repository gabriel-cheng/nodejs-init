<script>
    export default {
        name: "Header",
        data() {
            return {
                navigations: ["Home", "Sobre", "Contato"]
            }
        }
    }
</script>

<template>
    <div>
        <p>Gabriel</p>
        <ul>
            <li v-for="(itens, index) in navigations" :key="index">{{itens}}</li>
        </ul>
    </div>
</template>

<style scoped>
    div {
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0 0 0 20px;
    }

    p {
        color: #000;
        font-size: 32px;
    }

    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        width: 100%;
        background-color: #fff;
    }

    ul li {
        color: #000;
    }
</style>
