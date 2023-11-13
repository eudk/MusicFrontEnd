const baseUri = "https://musicrest20231109141315.azurewebsites.net/records"

Vue.createApp({
    data() {
        
        return {

            records: [],
            id : '',
            error: null
        }
    },
    methods: {
        async getAll() {
            console.log(baseUri)
            try {
                const response = await axios.get(baseUri)
                this.records = await response.data
                this.error = null
            } catch (ex) {
                this.records = []
                this.error = ex.message
            }
        }
    },
  
}).mount("#app")
