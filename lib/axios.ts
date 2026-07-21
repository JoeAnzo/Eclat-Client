import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API || 'https://api.eclatessence.shop'

export const apiClient = axios.create({
    baseURL:API_URL,
    timeout:60000,
    headers:{
        'Content-Type':'application/json'
    }
})