<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{nome}} e trabalho como {{profissao}} na citybens</p>
    </div>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data() {
            return {
                nome: "Gabriel Carvalho",
                profissao: "Desenvolvedor Web"
            }
        }
    }
</script>
