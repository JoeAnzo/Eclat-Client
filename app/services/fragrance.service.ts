import { apiClient } from "@/lib/axios";


export const fragranceService = {
    getFragrances:async (filters={}) => {
        const response = await apiClient.get('/v1/api/fragrances',{params:filters})
        return response.data
    },
    getFragranceBySlug:async (slug:string) => {
        const response = await apiClient.get(`/v1/api/fragrances/slugs/${slug}`)
        return response.data
    },
    getAvailableBrands:async () => {
        const response = await apiClient.get(`v1/api/fragrances/brands`)
        return response.data    
    },
    getAvailableFragranceByBrand:async (brand:string | undefined) => {
        const response = await apiClient.get(`/v1/api/fragrances?brands=${brand}`)
        return response.data
    },
    getFragrancesByGender:async (gender:string) => {
        const response = await apiClient.get(`/v1/api/fragrances?gender=${gender}`)
        return response.data
    },
    searchForFragrance:async (query:string) => {
        const response = await apiClient.get(`/v1/api/fragrances/search=${query}`)
        return response.data
    }
}

