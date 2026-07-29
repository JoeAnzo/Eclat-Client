"use client"
import { ShoppingBag,ArrowRight,Trash,ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {useCart} from "@/hooks/useCart"
import { CartItem } from "../Interfaces/product.interface"
import QuantityButtons from "@/components/QuantityButtons"
import Link from "next/link"

export default function Cart() {

  const {cart,totalItems,totalPrice,clearCart,removeFromCart,updateQuantity} = useCart()
  return (
    <section className="min-h-screen">
      {
        cart.length === 0 ? 
        <div className="flex flex-col items-center justify-center h-screen gap-2">
          <ShoppingBag size={30}/>
          <h2 className="text-xl font-semibold font-playfair">Your Cart is empty</h2>
          <Link href="/shop">
            <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
              Shop now
              <ArrowRight/>
            </Button>
          </Link>
        </div>
        :
        <div className="flex flex-col gap-2 pt-15">
          <div className="flex justify-between items-center px-[20px] border-b">
            <h2 className="text-xl font-semi-bold font-sans">Cart Summary</h2>
            <ChevronDown/>
          </div>
          <div className="px-[20px]">
            <p className="font-space">Cart: ({totalItems})</p>
            <p className="font-space">SubTotal:UGX {totalPrice.toLocaleString()}</p>
          </div>
          {
            cart.map((item:CartItem) => {
              return <div key={item.id} className="flex gap-2 bg-[#F5F5F5] px-[20px]">
                <div>
                  <Image src={item.thumbnailUrl} alt={item.name} className="max-w-[110px] object-cover h-auto"/>
                </div>
                <div className="flex flex-col p-2">
                  <h2 className="font-playfair font-semibold text-md">{item.name}</h2>
                  <p className="font-space">UGX {item.price.toLocaleString()}</p>
                  <div className="flex flex-col gap-2">
                    <QuantityButtons item={item} updateQuantity={updateQuantity}/>
                    <p onClick={() => removeFromCart(item.id)} className="text-(--primary-color) flex items-center justify-center">Remove<Trash/></p>
                  </div>
                </div>
              </div>
            })
          }
          <div className="sticky py-1.5 bottom-0 flex flex-col gap-2 items-center justify-center bg-white px-8">
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 w-full px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                CheckOut (UGX {totalPrice.toLocaleString()})
                <ArrowRight/>
              </Button>
          </div>
        </div>
      }
    </section>
  )
}

