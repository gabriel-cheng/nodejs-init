<template>
    <div>
        <hr>
        <h2>Esta é a descrição da pessoa: {{nome}}</h2>
        <Info />
    </div>
</template>

<script>
    import Info from './Info.vue';

    export default {
    name: "Pessoa",
    data() {
        return {
            nome: "Gabriel Carvalho"
        };
    },
    components: {
        Info
    }
}
</script>
