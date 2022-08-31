<template>
    <div>
        <h1>Meu formulário</h1>
        <form action="/teste" @submit="enviarForm($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>
    import InputText from './InputText.vue'
    import Submit from './Submit.vue';

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                name: '',
                email: ''
            }
        },
        methods: {
            enviarForm(e) {
                e.preventDefault();

                const name = this.name;
                const email = this.email;

                console.log('Envio bloqueado');
                console.log(`O nome é: ${name}`);
                console.log(`O email é: ${email}`);
            }
        }
    }
</script>
