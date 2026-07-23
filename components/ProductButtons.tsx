'use client'
import {ShoppingBag,HeartIcon} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from '@/hooks/useCart'
import { Product } from '@/app/Interfaces/product.interface'

interface productButtonProps {
    product:Product;
}

export default function ProductButtons({product}:productButtonProps){
    const {addToCart} = useCart()
    return(
        <>
            <Button onClick={() => addToCart(product)} size="lg" variant="default" className="bg-(--primary-color) sticky bottom-0 h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Add to cart
                <ShoppingBag/>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 font-semibold text-lg shadow-lg tracking-wide flex gap-2 rounded-none">
                Add to wishlist
                <HeartIcon/>
            </Button>
        </>
    )
}