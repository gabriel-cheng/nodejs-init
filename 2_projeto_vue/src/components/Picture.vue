<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default {
        name: 'Picture',
        data() {
            return {
                avatar: '/img/grafico.PNG',
                descricao: 'Imagem aleatória'
            }
        }
    }
</script>
