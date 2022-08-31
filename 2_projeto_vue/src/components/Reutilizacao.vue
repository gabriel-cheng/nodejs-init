<script>
    export default {
        name: "Reutilizacao",
        data() {
            return {
                ativou: false
            }
        },
        mehods: {
            ativar() {
                this.ativou = !this.ativou;
            }
        }
    }
</script>

<template>
    <div>
        <button @click="ativar()">Clique aqui!</button>
        <span v-show="ativou()">Ativado!</span>
    </div>
</template>
