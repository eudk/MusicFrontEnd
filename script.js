const baseUri = "https://musicrest20231109141315.azurewebsites.net/records"
//const baseUri = "http://localhost:5242/"

Vue.createApp({
    data() {
        
        return {

            records: [],
            id : '',
            f_title : '',
            f_artist : '',
            f_duration : 0,
            f_pubyear : null,
            error: null
        }
    },
    methods: {
        async getAll() {
            params = new URLSearchParams([['title', this.f_title], ['artist', this.f_artist], ['duration', this.f_duration]]);
            if (this.f_pubyear != null) {
                params.append('publicationYear', this.f_pubyear);
            }
            console.log(baseUri)
            try {
                const response = await axios.get(baseUri, { params });
                this.records = await response.data
                this.error = null
            } catch (ex) {
                this.records = []
                this.error = ex.message
            }
        }
    },
  
}).mount("#app")
