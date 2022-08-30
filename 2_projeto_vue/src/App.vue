<template>
    <div>
        <PrimeiroComponente />
        <p>Isto é apenas um {{teste}}</p>
        <LifeCycle />
        <Pessoa />
    </div>
</template>

<script>
    import PrimeiroComponente from './components/PrimeiroComponente';
    import LifeCycle from './components/LifeCycle.vue';
    import Pessoa from './components/Pessoa.vue';

    export default {
        name: 'App',
        components: {
            PrimeiroComponente,
            LifeCycle,
            Pessoa
        },
        data() {
            return {
                teste: "Teste"
            }
        }
    }
</script>

<style>
    body {
        background-color: #000;
        color: #fff;
    }
</style>
