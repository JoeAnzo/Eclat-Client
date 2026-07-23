'use client'

import {useState,useEffect} from 'react'
import { useCartStore } from '../app/store/useCartStore'

export function useCart(){
    const [hasHydrated,setHasHydrated] = useState(false)
    const store = useCartStore()

    useEffect(() => {
        setHasHydrated(true)
    },[]);

    if (!hasHydrated) {
        return {
            cart:[],
            totalItems:0,
            totalPrice:0,
            addToCart: () => {},
            removeFromCart: () => {},
            updateQuantity:() => {},
            clearCart:() => {},
        }
    }

    return store
}