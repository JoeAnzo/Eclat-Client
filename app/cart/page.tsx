"use client"
import useCart from "@/hooks/useCart"
import { ShoppingBag,ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
export default function Cart() {
  const {cart} = useCart()
  return (
    <section className="min-h-screen">
      {
        cart.length === 0 ? 
        <div className="h-screen flex flex-col gap-2 items-center justify-center bg-red">
            <ShoppingBag/>
            <h2 className="font-bold text-xl font-inter">Your Cart is empty</h2>
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Shop now
                <ArrowRight/>
              </Button>
        </div>:
        <div>

        </div>
      }
    </section>
  )
}

