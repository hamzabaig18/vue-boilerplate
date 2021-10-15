<script>
  import axios from 'axios';

  const apiClient = axios.create({
    baseURL: process.env.VUE_APP_MOCK_API_URL,
    
  });
 
 export default{

    async getRequestMethod(endpoint) {
        debugger
        return await apiClient.get(endpoint)
        .then(response => {
			return response.data
		})
        .catch(e => {
            console.log('Error occur ' + e.message)    	
		});
    },

    async postRequestMethod(endpoint,data) {
        return await apiClient.post(endpoint, {body: data})
        .then(response => {
            return response
        })
        .catch(e => {
             return console.log('Error occur ' + e.message)    
        })
    },

    async putRequestMethod(endpoint,data) {
        return await apiClient.post(endpoint, data)
        .then(response => {
            return response
        })
        .catch(e => {
             return console.log('Error occur ' + e.message)    
        })
    },

    async deleteRequestMethod(endpoint) {
       return await apiClient.delete(endpoint)
       .then(response => {
            return response
        })
        .catch(e => {
             return console.log('Error occur ' + e.message)    
        })
    }
 }
    
</script>