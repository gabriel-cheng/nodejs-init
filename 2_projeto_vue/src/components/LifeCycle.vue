<template>
    <h1>Meu nome é: {{nome}}</h1>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data() {
            return {
                nome: 'Ainda não sei'
            }
        },
        created() {
            setTimeout(() => {
                this.nome = "Gabriel"
            }, 1000)

            this.lifeCycle();
        },
        mounted() {
            setTimeout(() => {
                this.nome = "Carvalho"
            }, 3000);
        },
        methods: {
            lifeCycle() {
                console.log("Executou");
            }
        }
    }
</script>
