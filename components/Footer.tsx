import Link from "next/link"
import { Button } from "./ui/button"
import {PhoneCall,Mail} from 'lucide-react'
import {FaInstagram,FaTwitter,FaFacebook,FaTiktok} from "react-icons/fa"
import Animation from "@/components/Animation"

export default function Footer(){
    return(
        <footer className="bg-(--primary-color) p-4">
            <div className="flex flex-col sm:flex-row justify-between">
                <div>
                    <div>
                        <Animation variant="slideRight">
                            <h3 className="text-2xl my-4 font-playfair text-(--secondary-color)">Subscribe to our daily Newsletter</h3>
                        </Animation>
                        <Animation variant="slideUp">
                            <div className="flex">
                            <input className="p-2 bg-white" type="text"  placeholder="Email"/>
                            <Button variant="secondary" className="bg-(--secondary-color) text-white h-auto rounded-none">Subscribe</Button>
                            </div>
                        </Animation>
                        
                    </div>
                    <div>
                            <Animation variant="slideRight">
                                <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Follow Us</h3>
                            </Animation>
                            <Animation variant="slideUp">
                                <div className="flex gap-2">

                                    <FaInstagram color="white" size={24}/>
                    
                                    <FaTwitter color="white" size={24}/>
                      
                                    <FaFacebook color="white" size={24}/>
                        
                                    <FaTiktok color="white" size={24}/>
                            
                                </div>
                            </Animation>

                    </div>
                </div>
                <div>
                        <div className="space-y-2">
                            <Animation variant="slideRight">
                                <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Reach Out To Us</h3>
                            </Animation>

                        <div className="flex gap-2 items-center text-white">
                            <PhoneCall/>
                            <p className="font-inter">0754242865</p>
                        </div>
                        <div className="flex gap-2 items-center text-white">
                            <Mail/>
                            <p className="font-inter">reply@eclatessence.shop</p>
                            </div>
                        </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <Animation variant="slideRight">
                            <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Quick Links</h3>
                        </Animation>
                        <Animation variant="slideUp">
                            <div className="flex flex-col">
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/">Home</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/shop">Shop</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/how-it-works">How it works</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/about-us">About</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/contact-us">Contact and FAQs</Link>
                            </div>
                        </Animation>        
                    </div>
                </div>
                <div>
                    <div>
                        <Animation variant="slideRight">
                            <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Brands We Deal In</h3>
                        </Animation>
                        <Animation variant="slideUp">
                            <p className="text-white mb-2 font-inter">Dior</p>
                            <p className="text-white mb-2 font-inter">Chanel</p>
                            <p className="text-white mb-2 font-inter">Yves Saint Laurent</p>
                            <p className="text-white mb-2 font-inter">Giorgio Armani</p>
                            <p className="text-white mb-2 font-inter">Carolina Herrera</p>
                        </Animation>
                    </div>
                </div>
            </div>
            <div>
                    <Animation variant="slideUp">
                        <p className="text-center pt-2 border-t font-inter border-gray-300 text-white">© copyright {new Date().getFullYear()} eclat eccense.shop.All rights reserved.<br/>
                            Last Updated May 26, 2026
                        </p>
                    </Animation>
            </div>
        </footer>
    )
}
