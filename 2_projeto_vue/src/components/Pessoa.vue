<script>
    import Info from './Info.vue';
    import Form from './form/Form.vue';

    export default {
    name: "Pessoa",
    data() {
        return {
            nome: 'Gabriel Carvalho',
            email: 'gabriel@hotmail.com'
        };
    },
    components: {
        Info,
        Form
    }
}
</script>

<template>
    <div>
        <hr>
        <h2>Esta é a descrição da pessoa: {{nome}}</h2>
        <Info :email="email"/>
        <Form />
    </div>
</template>
