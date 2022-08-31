<template>
    <div>
        <Header />
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
    import Header from './components/Header.vue';

    export default {
        name: 'App',
        components: {
            Header,
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
