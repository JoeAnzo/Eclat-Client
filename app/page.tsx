import Couresel from "../components/Couresel"
import {ArrowRight,Play,ShoppingBag,Truck,HandCoins} from 'lucide-react'
import BestSellers from "@/components/BestSellers"
import { Button } from "@/components/ui/button"
import HowItWorksCard from "@/components/HowItWorksCard"
import Animation from "@/components/Animation"

export const metadata = {
  title:"Home"
}


export default function Home() {


  const howItWorks = [
    {
      id:1,
      step:"01",
      title:"Browse & Add",
      icon:<ShoppingBag/>
    },
    {
      id:2,
      step:"02",
      title:"Choose Payment",
      icon:<HandCoins/>
    },{
      id:3,
      step:"03",
      title:"Get Your Scent Delivered",
      icon:<Truck/>
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
              <p className="text-(--text) font-inter text-center my-4">Best Sellers</p>
          </Animation>
          <div className="h-1 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="text-center font-playfair px-2 text-(--text) my-2 text-3xl">Discover our most-coveted bottles and find your match.</h2>
        </Animation>
        <BestSellers/>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <p className="font-inter text-(--text) text-center my-4">How it works</p>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-4">Three taps, one delivery</h2>
          <div className="space-y-4 px-4">
              {
                howItWorks.map((item) => {
                    return <HowItWorksCard step={item.step} title={item.title} icon={item.icon}/>
                }) 
              }
          </div>
        </Animation>
        <div>
         
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="text-(--text) text-center my-4">Testimonials</h2>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="font-playfair text-center px-2 text-(--text) my-2">What Our Customers have to say</h2>
        </Animation>
        
      </section>
    </main>
  )
  }
