<script>
    import Picture from './Picture.vue';

    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                meu_link: 'http://gabrielcarvalho.herokuapp.com',
                textoBotao: 'Esconder email',
                backend_technologies: ['Javascript', 'php', 'python'],
                frontend_technologies: [
                    {id: 1, language: 'HTML'},
                    {id: 2, language: 'CSS'},
                    {id: 3, language: 'JAVASCRIPT'}
                ]
            }
        },
        props: {
            email: String
        },
        components: {
            Picture
        },
        methods: {
            showEmail() {
                if(this.mostrar_email) {
                    this.textoBotao = 'Mostrar email';
                    this.mostrar_email = false;
                } else {
                    this.textoBotao = 'Esconder email';
                    this.mostrar_email = true;
                }
            }
        },
    }
</script>

<template>
    <div>
        <p>{{compEmail}}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Utilizo as seguintes tecnologias para Back-end:</p>
        <ul>
            <li v-for="(items, index) in backend_technologies" v-bind:key="index">{{items}}</li>
        </ul>
        <p>Ferramentas de Front-end:</p>
        <ul>
            <li v-for="(tech) in frontend_technologies" v-bind:key="tech.id">{{tech.language}}</li>
        </ul>
        <div>
            <button @click="showEmail()">{{textoBotao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma pensagem para: {{email}}</p>
        <p>Para acessar meu portfólio, basta clicar <a v-bind:href="meu_link" target="_blank">aqui</a></p>
        <Picture />
    </div>
</template>
