import Link from "next/link"
import { Button } from "./ui/button"
import {PhoneCall,Mail} from 'lucide-react'
import {FaInstagram,FaTwitter,FaFacebook,FaTiktok} from "react-icons/fa"
import Animation from "@/components/Animation"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="bg-(--primary-color) p-4">
            <Link href="/">
                <h1 className="text-xl font-bold font-playfair text-(--primary-color)">Eclat Essence</h1>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between">
                <div>
                    <div>
                        <Animation variant="none">
                            <h3 className="text-2xl my-4 font-playfair text-(--secondary-color)">Subscribe to our daily Newsletter</h3>
                        </Animation>
                        <Animation variant="none">
                            <div className="flex">
                            <input className="p-2 bg-white" type="text"  placeholder="Email"/>
                            <Button variant="secondary" className="bg-(--secondary-color) text-white h-auto rounded-none">Subscribe</Button>
                            </div>
                        </Animation>
                        
                    </div>
                    <div>
                            <Animation variant="none">
                                <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Follow Us</h3>
                            </Animation>
                            <Animation variant="none">
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
                        <div>
                            <Animation variant="none">
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
                        <Animation variant="none">
                            <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">Shop</h3>
                        </Animation>
                        <Animation variant="none">
                            <div className="flex flex-col">
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/privacy-policy">Men</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/contact-us">Women</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/terms-and-conditions">Best Sellers</Link>
                                <Link className="py-2 text-white sm:border-none font-inter hover:text-(--secondary-color)" href="/refund-and-return">New Arrivals</Link>
                            </div>
                        </Animation>        
                    </div>
                </div>
                <div>
                    <div>
                        <Animation variant="none">
                            <h3 className="text-2xl font-playfair text-(--secondary-color) my-4">About</h3>
                        </Animation>
                        <Animation variant="none">
                            <div className="flex flex-col text-white gap-2">
                                <Link href="#">Our Story</Link>
                                <Link href="#">Reviews</Link>
                                <Link href="#">Contact</Link>
                            </div>
                        </Animation>
                    </div>
                </div>
            </div>
            <div>
                    <Animation variant="none">
                        <div className="flex flex-col">
                            <div className="flex gap-2">
                                <p className="text-white font-inter">Payment methods:</p>
                                <Image src="/images/Payments/Airtel.jpg" width={24} height={24} alt="Airtel Money"/>
                                <Image src="/images/Payments/MasterCard.png" width={24} height={24} alt="MasterCard"/>
                                <Image src="/images/Payments/MTN.png" width={24} height={24} alt="Mtn mobile money"/>
                                <Image src="/images/Payments/Visa.png" width={24} height={24} alt="Visa"/>
                            </div>
                            <p className="text-center pt-2 border-t font-inter border-gray-300 text-white">© copyright {new Date().getFullYear()} eclat eccense.shop.All rights reserved.</p>
                            <div className="flex items-center justify-center gap-2 text-white my-2">
                                <Link href="#">TERMS & CONDITIONS</Link>
                                <Link href="#">PRIVACY POLICY</Link>
                                <Link href="#">RETURNS</Link>
                            </div>
                            
                        </div>
                        
                    </Animation>
            </div>
        </footer>
    )
}
