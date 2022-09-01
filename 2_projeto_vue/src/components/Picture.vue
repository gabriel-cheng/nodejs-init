<script>
    import Mudarimagem from './Mudarimagem.vue';

    export default {
    name: "Picture",
    data() {
        return {
            avatar: "/img/grafico.PNG",
            descricao: "Imagem aleatória"
        };
    },
    components: {
        Mudarimagem
    },
    methods: {
        trocarImagem() {
            console.log('Você trocou de imagem!');
            if(this.avatar == "/img/grafico.PNG") {
                this.avatar = "/img/percentual.PNG";
            } else {
                this.avatar = "/img/grafico.PNG";
            }
        }
    }
}
</script>

<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <Mudarimagem @trocar-imagem="trocarImagem()"/>
    </div>
</template>
