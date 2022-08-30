<template>
    <div>
        <h1>Meu formulário</h1>
        <form action="">
            <div>
                <InputText />
            </div>
            <div>
                <InputText />
            </div>
            <div>
                <InputText />
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
}
    }
</script>
