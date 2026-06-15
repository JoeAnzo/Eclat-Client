import Couresel from "../components/Couresel"
import {ArrowRight,Play,ShoppingBag} from 'lucide-react'
import BestSellers from "@/components/BestSellers"
import { Button } from "@/components/ui/button"
import Animation from "@/components/Animation"
import {type LucideIcon} from 'lucide-react'

export const metadata = {
  title:"Home"
}


export default function Home() {

  interface howItWorks {
    step:string;
    desc:string;
    icon?:LucideIcon;
  }

  const howItWorks:howItWorks[] = [
    {
      step:"01",
      desc:"Browse & Add",
    }
  ]
  return (
    <main>
      <section className="relative h-screen sm:h-[80vh]">
        <Couresel/>
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] space-y-5  z-5">
          <Animation variant="slideRight">
            <h2 className="sm:text-4xl text-5xl font-semibold font-playfair text-(--primary-color) my-4">Your Essence, Your Signature</h2>
          </Animation>
          <Animation variant="slideUp">
            <p className="text-white text-md sm:text-2xl font-sans prose mb-4">Find the scent that speaks your language and defines your everyday moments </p>
          </Animation>
          <Animation variant="slideUp">
            <div className="flex gap-2 justify-start items-left">
              <Button size="lg" variant="secondary" className="bg-(--primary-color) text-white p-2.5 flex gap-2 rounded-none">
                Shop now
                <ArrowRight/>
              </Button>
              <Button variant="outline" size="lg" className="p-2.5 flex gap-2 rounded-none">
                <Play />
                How it works
              </Button>
            </div>
          </Animation>
           
        </div>
      </section> 
      <section>
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
              <h2 className="font-playfair text-3xl text-(--primary-color) text-center my-4">Best Sellers</h2>
          </Animation>
          <div className="h-2 mb-4 bg-(--primary-color) rounded-md w-50"></div>
        </div>
        <Animation variant="slideUp">
          <p className="text-center px-2 text-(--secondary-color) my-2">Discover our most-coveted bottles and find your match.</p>
        </Animation>
        <BestSellers/>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="font-playfair text-3xl text-(--primary-color) text-center my-4">How it works</h2>
          </Animation>
          <div className="h-2 mb-4 bg-(--primary-color) rounded-md w-50"></div>
        </div>
        <Animation variant="slideUp">
          <p className="px-2  text-(--secondary-color) text-center my-4">Three taps, one delivery</p>
        </Animation>
        <div>
         
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="font-playfair text-3xl text-(--primary-color) text-center my-4">Testimonials</h2>
          </Animation>
          <div className="h-2 mb-4 bg-(--primary-color) rounded-md w-50"></div>
        </div>
        <Animation variant="slideUp">
          <p className="text-center px-2 text-(--secondary-color) my-2">What Our Customers have to say</p>
        </Animation>
        
      </section>
    </main>
  )
  }
