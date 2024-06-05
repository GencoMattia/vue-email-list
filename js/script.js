const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [

            ],
        }
    },

    methods: {
        getRandomEmail () {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                const result = response.data;
                console.log(result)
            });
        }
    },

    created() {
        this.getRandomEmail();
    }
}).mount('#app')