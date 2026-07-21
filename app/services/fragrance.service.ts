import { apiClient } from "@/lib/axios";


export const fragranceService = {
    getFragrances:async (filters={}) => {
        const response = await apiClient.get('/v1/api/fragrances',{params:filters})
        return response.data
    },
    getFragranceBySlug:async (slug:string) => {
        const response = await apiClient.get(`/v1/api/fragrances/${slug}`)
        return response
    }
}

