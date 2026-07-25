"use client"
import { ShoppingBag,ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {useCart} from "@/hooks/useCart"
import { CartItem } from "../Interfaces/product.interface"

export default function Cart() {

  const {cart,totalItems,totalPrice} = useCart()
  return (
    <section className="min-h-screen">
      {
        cart.length === 0 ? 
        <div className="flex flex-col items-center justify-center h-full gap-2">
          <ShoppingBag/>
          <h2 className="text-xl font-semibold font-playfair">Cart is empty</h2>
          <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
          Continue Shopping
          <ArrowRight/>
          </Button>
        </div>
        :
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semi-bold font-sans">Cart Summary</h2>
          <p>Total Items:{totalItems}</p>
          <p>Total Price:{totalPrice}</p>
          {
            cart.map((item:CartItem) => {
              return <div key={item.id} className="flex gap-2 bg-[#F5F5F5]">
                <div className="w-[400px] h-[400px]">
                  <Image src={item.thumbnailUrl} alt={item.name} className="w-full h-full"/>
                </div>
                <div>
                  <h2 className="font-playfair font-semibold text-md">{item.name}</h2>
                  <p className="font-space">UGX {item.price.toLocaleString()}</p>
                  <div className="flex gap-2">
                    <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                      +
                    </Button>
                    <p className="font-space">QTY:{item.quantity}</p>
                    <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                      -
                    </Button>
                  </div>
                </div>
              </div>
            })
          }
          <div className="sticky bottom-0">
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                CheckOut {totalPrice.toLocaleString()}
              </Button>
          </div>
        </div>
      }
    </section>
  )
}

