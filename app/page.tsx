import Couresel from "../components/Couresel"
import {ArrowRight,Play} from 'lucide-react'
import BestSellers from "@/components/BestSellers"
import { Button } from "@/components/ui/button"


export const metadata = {
  title:"Home"
}


export default function Home() {
  return (
    <main>
      <section className="relative h-screen sm:h-[80vh]">
        <Couresel/>
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] space-y-5  z-5">
           <h2 className="sm:text-4xl text-5xl font-semibold font-playfair text-(--primary-color) my-4">Your Essence, Your Signature</h2>
           <p className="text-white text-md sm:text-2xl font-sans prose mb-4">Find the scent that speaks your language and defines your everyday moments </p>
           <div className="flex gap-2 justify-start items-left  bg-red">
            <Button size="lg" variant="secondary" className="bg-(--primary-color) text-white p-2.5 flex gap-2">
              Shop now
              <ArrowRight/>
            </Button>
            <Button variant="outline" size="lg" className="p-2.5 flex gap-2">
              <Play />
              How it works
            </Button>
           </div>
        </div>
      </section> 
      <section>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-playfair text-3xl text-(--primary-color) text-center my-4">Best Sellers</h2>
          <div className="h-2 mb-4 bg-(--primary-color) rounded-md w-[200px]"></div>
        </div>
        <p className="text-center px-2 text-(--secondary-color) my-2">Discover our most-coveted bottles and find your match.</p>
        <BestSellers/>
      </section>
      <section>
        <h2 className="font-playfair text-2xl text-(--primary-color) text-center my-4">How it works</h2>
        <h3 className="font-playfair text-2xl text-(--primary-color) text-center my-4">Three taps, one delivery</h3>
        
      </section>
      <section>
        <h2 className="font-playfair">Testimonials</h2>
        <p>What Our Customers have to say</p>
      </section>
    </main>
  )
  }
