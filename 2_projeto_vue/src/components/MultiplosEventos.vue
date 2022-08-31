<script>
import { tSMethodSignature } from '@babel/types';

    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                MultiplosEventos: ""
            }
        },
        methods: {
            primeiro(e) {
                this.MultiplosEventos = "Primeiro evento ativado!"
            },
            segundo(e) {
                setTimeout(() => {
                    this.MultiplosEventos = "Segundo evento ativado!"
                }, 2000);
            }
        }
    }
</script>

<template>
    <div>
        <button @click="primeiro($event), segundo($event)">Ativar mutiplos eventos</button>
        <p>{{MultiplosEventos}}</p>
    </div>
</template>

<style scoped>
    button {
        cursor: pointer;
    }

    div {
        margin: 100px;
    }
</style>
