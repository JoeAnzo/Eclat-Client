"use client"
import { ShoppingBag,ArrowRight,Trash } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {useCart} from "@/hooks/useCart"
import { CartItem } from "../Interfaces/product.interface"
import QuantityButtons from "@/components/QuantityButtons"

export default function Cart() {

  const {cart,totalItems,totalPrice,clearCart,removeFromCart,updateQuantity} = useCart()
  return (
    <section className="min-h-screen">
      {
        cart.length === 0 ? 
        <div className="flex flex-col items-center justify-center h-full gap-2 bg-red-100">
          <ShoppingBag/>
          <h2 className="text-xl font-semibold font-playfair">Cart is empty</h2>
          <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
          Continue Shopping
          <ArrowRight/>
          </Button>
        </div>
        :
        <div className="flex flex-col gap-2 pt-8">
          <h2 className="text-xl pl-8 font-semi-bold font-sans">Cart Summary</h2>
          <p className="font-space pl-8">Cart: ({totalItems})</p>
          <p className="font-space pl-8">Sub Total:{totalPrice}</p>
          {
            cart.map((item:CartItem) => {
              return <div key={item.id} className="flex gap-2 bg-[#F5F5F5]">
                <div>
                  <Image src={item.thumbnailUrl} alt={item.name} className="max-w-full h-auto"/>
                </div>
                <div className="flex flex-col p-2">
                  <h2 className="font-playfair font-semibold text-md">{item.name}</h2>
                  <p className="font-space">UGX {item.price.toLocaleString()}</p>
                  <div className="flex flex-col gap-2">
                    <QuantityButtons item={item} updateQuantity={updateQuantity}/>
                    <p onClick={() => removeFromCart(item.id)} className="text-(--primary-color) flex items-center justify-center">Remove item <Trash/></p>
                  </div>
                </div>
              </div>
            })
          }
          <div className="sticky py-1.5 bottom-0 flex flex-col gap-2 items-center justify-center bg-white px-8">
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 w-full px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                CheckOut (UGX {totalPrice.toLocaleString()})
              </Button>
              <Button onClick={() => clearCart()} size="lg" variant="default" className="bg-(--primary-color) w-full h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Clear Cart
              </Button>
          </div>
        </div>
      }
    </section>
  )
}

