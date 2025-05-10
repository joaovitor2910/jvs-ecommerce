import axios from "axios";

const api = axios.create({
    baseURL: 'https://dummyjson.com/products',
    params: {
        limit: 0
    }
})

export default api