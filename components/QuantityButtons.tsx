"use client"
import {useState} from "react"
import { Button } from "@/components/ui/button"
import { CartItem } from "@/app/Interfaces/product.interface"


interface QuantityButtonProps {
    item:CartItem;
    updateQuantity: (productId:string,quantity:number) => void
}

export default function QuantityButtons({item,updateQuantity}:QuantityButtonProps){
    const [quantity,setQuantity] = useState(1)
    const addQuantity = () => {
        setQuantity(prev => prev + 1)
        updateQuantity(item.id,quantity)
    }
    const subtractQuantity = () => {
        setQuantity(prev => prev - 1)
        updateQuantity(item.id,quantity)
    }
    return(
        <div className="flex items-center gap-2 justify-center">
            <Button onClick={addQuantity} size="lg" variant="default" className="bg-(--primary-color) px-4 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                +
            </Button>
            <p className="font-space">{item.quantity}</p>
            <Button onClick={subtractQuantity} size="lg" variant="default" className="bg-(--primary-color) px-4 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                -
            </Button>
        </div>
    )
}