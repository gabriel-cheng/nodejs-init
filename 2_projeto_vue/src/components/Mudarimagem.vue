<script>
    export default {
        name: 'Mudarimagem',
        emits: ['trocarImagem']
    }
</script>

<template>
    <div>
        <button @click="$emit('trocarImagem')">Trocar imagem de perfil</button>
    </div>
</template>

<style scoped>
    button {
        width: auto;
        padding: 20px;
        cursor: pointer;
        background-color: blue;
        color: #fff;
        margin: 10px 0 0 0;
    }

    button:hover {
        background-color: rgba(0, 0, 255, 0.589);
    }
</style>
