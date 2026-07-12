import Couresel from "../components/Couresel"
import TestimonialCarousel from "../components/TestimonialCarousel"
import {ArrowRight,Play,ShoppingBag} from 'lucide-react'
import {GiTakeMyMoney} from "react-icons/gi"
import {CiDeliveryTruck} from "react-icons/ci"
import {FaWhatsapp} from "react-icons/fa"
import BestSellers from "@/components/BestSellers"
import { Button } from "@/components/ui/button"
import HowItWorksCard from "@/components/HowItWorksCard"
import Animation from "@/components/Animation"
import LogoCarousel from "@/components/LogoCarousel"
import Link from "next/link"
import Location from "@/components/Location"
import Image from "next/image"
import type { Metadata } from "next"


export const metadata:Metadata = {
  title: "Authentic Perfumes & Fragrances in Uganda | Eclat Essence",
  description: "Buy authentic designer perfumes in Uganda at [YourBrandName]. Shop long-lasting premium fragrances, colognes, and luxury scents in Kampala with fast, reliable delivery.",
  keywords: ["perfumes Uganda", "buy cologne Kampala", "original perfumes Kampala", "designer fragrances Uganda"],
  openGraph: {
    title: "Authentic Perfumes & Fragrances in Uganda | Eclat Essence",
    description: "Shop long-lasting premium designer fragrances and colognes in Kampala with fast delivery.",
    type: "website",
  },
};


export default function Home() {


  const howItWorks = [
    {
      id:1,
      step:"01",
      title:"Browse & Add",
      text:"Browse through our fragrance collection and find the scent that matches you.",
      icon:<ShoppingBag color="white" size={24}/>
    },
    {
      id:2,
      step:"02",
      text:"Choose your preferred payment method from MTN momo, Credit Card or Bank Transfer",
      title:"Choose Payment method",
      icon:<GiTakeMyMoney color="white" size={24}/>
    },{
      id:3,
      step:"03",
      text:"We deliver your scent to you with in a time period of 24 hours",
      title:"Get Your Scent Delivered",
      icon:<CiDeliveryTruck color="white" size={24}/>
    }
  ]
  return (
    <main className="relative">
      <div className="fixed bottom-5 right-5 h-15 w-15 rounded-full bg-[#25D366] flex items-center justify-center z-150">
        <FaWhatsapp color="white" size={30}/>
      </div>
      <section className="relative h-screen sm:h-[80vh]">
        <Couresel/>
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] space-y-5  z-5">
          <Animation variant="slideRight">
            <h2 className="sm:text-4xl text-5xl font-semibold font-playfair text-(--primary-color) my-5">Your Essence, <br/> Your Signature</h2>
          </Animation>
          <Animation variant="slideUp">
            <p className="text-white text-md sm:text-2xl font-inter leading-relaxed  max-w-prose mb-5">Find the scent that speaks your language and defines your everyday moments </p>
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
      <section className="py-8">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
              <p className="text-(--text) font-inter text-center my-4">Best Sellers</p>
          </Animation>
          <div className="h-1 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <div className="max-w-[720px] mx-auto text-center px-4">
            <h2 className="text-center font-playfair px-2 text-(--text) my-5 text-xl md:text-2xl">Discover our most-coveted bottles and find your match.</h2>
          </div>
        </Animation>
        <BestSellers/>
      </section>
      <section id="how-it-works" className="py-8">
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
                    return <HowItWorksCard key={index} step={item.step} title={item.title} icon={item.icon} text={item.text}/>
                }) 
              }
          </div>
        </Animation>
        <div>
         
        </div>
      </section>
      <section className="py-8">
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
      <section className="py-8 bg-(--primary-color)">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="text-white text-center my-4">Testimonials</h2>
          </Animation>
          <div className="h-1 mb-4 bg-white rounded-md w-20"></div>
        </div>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-white text-3xl text-center my-4">What Our Customers have to say</h2>
        </Animation>
        <Animation variant="slideDown">
          <TestimonialCarousel/>
        </Animation>
      </section>
      <section className="py-8 flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <Animation variant="slideRight">
            <h2 className="text-(--text) text-center my-4">Quiz</h2>
          </Animation>
          <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
        </div>
        <Animation variant="slideDown">
          <Image src="/images/quiz.jpg" width={1200} height={800} sizes="100vw" style={{width:'100%',height:'auto'}} alt="girl holding perfume"/>
        </Animation>
        <Animation variant="slideUp">
          <h2 className="px-2 font-playfair text-(--text) text-3xl text-center my-4">Take A Quiz To Find Your Signature Scent</h2>
        </Animation>
        <Button size="lg" variant="default" className="bg-(--primary-color) h-12 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 rounded-none">
          Take Quiz
          <ArrowRight/>
        </Button>
      </section>
      <section id="contact" className="py-8 p-4">
        <div>
          <Animation variant="slideRight">
          <div className="flex flex-col justify-center items-center">
            <Animation variant="slideRight">
              <p className="text-(--text) text-center my-4">Get In Touch</p>
            </Animation>
            <div className="h-1 mb-4 bg-(--secondary-color) rounded-md w-20"></div>
          </div>
          <Animation variant="slideUp">
            <h2 className="px-2 font-playfair text-(--text) text-3xl text-left my-4">OUR ADDRESS</h2>
            <Animation variant="slideUp">
              <div>
                <p className="">Equator Digital Agency</p>
                <p className="">Plot 14, Ntinda-Nakawa Road</p>
                <p className="">Capital Shoppers Complex, 2nd Floor</p>
                <p className="">P.O. Box 24901</p>
                <p className="">Kampala, Uganda</p>
              </div>
            </Animation>
            <div>
              <h2 className="5">OUR LOCATION</h2>
              <div>
                <Location />
              </div>
            </div>
          </Animation>
          <Animation variant="slideUp">
          <form className="flex flex-col gap-2 sm:max-w-[320px]">
            <h2 className="px-2 font-playfair text-(--text) text-3xl text-left my-5">SEND US A MESSAGE</h2>
            <label htmlFor="name" className="text-(--text) ">Name</label>
            <input type="text" id="name" placeholder="Your Name" required className="h-10 bg-[#F5F5F5]"/>
            <label htmlFor="email" className="text-(--text)">Email</label>
            <input type="email" id="email" placeholder="Your Email" required className="h-10 bg-[#F5F5F5]"/>
            <label htmlFor="subject" className="text-(--text)">Subject</label>
            <select id="subject" className="h-10 bg-[#F5F5F5]">
              <option value="">Select a Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <label htmlFor="message" className="text-(--text)">Message</label>
            <textarea id="message" placeholder="Your Message" required className="h-40.5 bg-[#F5F5F5]"></textarea>
              <Button size="lg" type="submit" variant="default" className="h-10 px-8 font-semibold text-lg shadow-lg tracking-wide text-white flex gap-2 bg-(--secondary-color) rounded-none">
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
