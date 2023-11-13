const baseUri = "http://jsonplaceholder.typicode.com/posts"

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
                this.posts = await response.data
                this.error = null
            } catch (ex) {
                this.posts = []
                this.error = ex.message
            }
        }
    },
  
}).mount("#app")
