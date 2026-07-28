'use client'
import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag,HeartIcon } from "lucide-react"
import Animation from "./Animation"
import Link from "next/link"
import { useCart } from "@/hooks/useCart"

type productCard = Omit<Product,'id'>

function ProductCard({name,thumbnailUrl,price,slug,gender}:productCard) {
  const {addToCart} = useCart()
  type genderFormat = 'Men' | 'Women' | 'Unisex'
  let genderFormat:genderFormat
  if (gender === 'MALE'){
    genderFormat = 'Men'
  } else if (gender === 'FEMALE'){
    genderFormat = 'Women'
  } else {
    genderFormat = 'Unisex'
  }

  return (
    <Animation variant="slideUp">
      <Link href={`/shop/${slug}`}>
        <div className="rounded-lg shadow-md max-w-85  relative">
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={thumbnailUrl} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full rounded-t-lg h-auto object-cover"/>
          <div className="absolute z-100 right-2 bottom-2 flex items-center justify-center bg-[#F5F5F5] h-8 w-8 rounded-full">
            <HeartIcon/>
          </div>
        </div>
        <Animation variant="none">
          <div className="flex w-full items-center justify-center">
            <div className="pb-4 rounded-b-lg flex flex-col items-start">
              <p className="py-2 font-bold font-playfair">{name}</p>
              <p className="pb-2 font-space">UGX {price.toLocaleString()}</p>
            </div>
          </div>
        </Animation>
      </div>
      </Link>
    </Animation>

  )
  
}

export default ProductCard
