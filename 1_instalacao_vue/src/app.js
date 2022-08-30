const MyNameApp = {
    data() {
      return {
        name: "Matheus",
        input_name: ""
      }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            console.log('Caiu aqui!');
        }
    }
  }
  
  Vue.createApp(MyNameApp).mount('#app')