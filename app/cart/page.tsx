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
        <div className="h-screen flex flex-col gap-2 items-center justify-center">
            <ShoppingBag size={40}/>
            <h2 className="font-bold text-xl font-inter">Your vanity is empty!</h2>
            <p className="italic">Don't leave your perfume tray lonely. Grab your favourites before they sell out.</p>
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Start Shopping
                <ArrowRight/>
              </Button>
        </div>:
        <div>

        </div>
      }
    </section>
  )
}

