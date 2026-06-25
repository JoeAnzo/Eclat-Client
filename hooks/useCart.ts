import { useState,useEffect } from "react";
import { useCartStore } from "@/app/store/useCartStore";

export default function useCart() {
    const store = useCartStore()
    const [isHydrated,setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    },[]);

    return {
        ...store,
        cart: isHydrated ? store.cart : [],
        totalItems:isHydrated ? store.getTotalItems : 0,
        totalPrice: isHydrated ? store.getTotalPrice : 0
    }
}