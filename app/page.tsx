import Couresel from "../components/Couresel"
import TestimonialCarousel from "../components/TestimonialCarousel"
import {ArrowRight,Play,ShoppingBag,Truck,HandCoins} from 'lucide-react'
import {GiTakeMyMoney} from "react-icons/gi"
import {CiDeliveryTruck} from "react-icons/ci"
import BestSellers from "@/components/BestSellers"
import { Button } from "@/components/ui/button"
import HowItWorksCard from "@/components/HowItWorksCard"
import Animation from "@/components/Animation"
import LogoCarousel from "@/components/LogoCarousel"
import Link from "next/link"

export const metadata = {
  title:"Home"
}


export default function Home() {


  const howItWorks = [
    {
      id:1,
      step:"01",
      title:"Browse & Add",
      icon:<ShoppingBag className="text-(--secondary-color)"/>
    },
    {
      id:2,
      step:"02",
      title:"Choose Payment",
      icon:<GiTakeMyMoney size={24} className="text-(--secondary-color)"/>
    },{
      id:3,
      step:"03",
      title:"Get Your Scent Delivered",
      icon:<CiDeliveryTruck size={24} className="text-(--secondary-color)"/>
    }
  ]
  return (
    <main>
      <section className="relative h-screen sm:h-[80vh]">
        <Couresel/>
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] space-y-5  z-5">
          <Animation variant="slideRight">
            <h2 className="sm:text-4xl text-5xl font-semibold font-playfair text-(--primary-color) my-5">Your Essence, Your Signature</h2>
          </Animation>
          <Animation variant="slideUp">
            <p className="text-white text-md sm:text-2xl font-inter prose mb-5">Find the scent that speaks your language and defines your everyday moments </p>
          </Animation>
          <Animation variant="slideUp">
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-left">
              
              <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Shop now
                <ArrowRight/>
              </Button>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="px-8 font-semibold text-lg shadow-lg tracking-wide h-12  flex gap-2 rounded-none">
                  How it works
                  <Play/>
                </Button>
              </Link>
            </div>
          </Animation>
           
        </div>
      </section> 
      <section className="py-12">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
              <p className="text-(--text) font-inter text-center my-4">Best Sellers</p>
          </Animation>
          <div className="h-1 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="text-center font-playfair px-2 text-(--text) my-5 text-3xl">Discover our most-coveted bottles and find your match.</h2>
        </Animation>
        <BestSellers/>
      </section>
      <section id="how-it-works" className="py-12">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <p className="font-inter text-(--text) text-center my-4">How it works</p>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-5">Three taps, one delivery</h2>
          <div className="space-y-4 px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
              {
                howItWorks.map((item,index) => {
                    return <HowItWorksCard key={index} step={item.step} title={item.title} icon={item.icon}/>
                }) 
              }
          </div>
        </Animation>
        <div>
         
        </div>
      </section>
      <section className="py-12">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <p className="text-(--text) text-center my-4">Brands</p>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-4">Check Out Our Fragrance Collection</h2>
        </Animation>
        <Animation variant="slideUp">
          <LogoCarousel/>
        </Animation>
      </section>
      <section className="py-12">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="text-(--text) text-center my-4">Testimonials</h2>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-4">What Our Customers have to say</h2>
        </Animation>
        <Animation variant="slideDown">
          <TestimonialCarousel/>
        </Animation>
      </section>
      <section id="contact" className="py-12 p-4">
        <div>
          <Animation variant="slideRight">
          <div className="flex flex-col justify-center items-center">
            <Animation variant="slideRight">
              <p className="text-(--text) text-center my-4">Get In Touch</p>
            </Animation>
            <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
          </div>
          <Animation variant="slideUp">
            <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-4">Let's Talk Fragrance</h2>
          </Animation>
          <Animation variant="slideUp">
          <form className="flex flex-col gap-2 sm:max-w-[320px]">
            <label htmlFor="name" className="text-(--text) ">Name</label>
            <input type="text" id="name" placeholder="Your Name" required className="rounded-md h-10 border border-(--secondary-color)"/>
            <label htmlFor="email" className="text-(--text)">Email</label>
            <input type="email" id="email" placeholder="Your Email" required className="h-10 rounded-md border border-(--secondary-color)"/>
            <label htmlFor="subject" className="text-(--text)">Subject</label>
            <select id="subject" className="h-10 rounded-md border border-(--secondary-color)">
              <option value="">Select a Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <label htmlFor="message" className="text-(--text)">Message</label>
            <textarea id="message" placeholder="Your Message" required className="rounded-md border border-(--secondary-color) h-62.5"></textarea>
              <Button size="lg" type="submit" variant="default" className="bg-(--secondary-color) h-10 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
                Send Message
              </Button>
          </form>
          </Animation>
          </Animation>
        </div>
      </section>
    </main>
  )
  }
