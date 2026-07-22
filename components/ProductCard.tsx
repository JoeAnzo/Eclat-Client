import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag,HeartIcon } from "lucide-react"
import Animation from "./Animation"
import Link from "next/link"


function ProductCard({name,thumbnailUrl,price,slug}:Product) {
  console.log(thumbnailUrl)
  return (
    <Animation variant="slideUp">
      <Link href={`/shop/${slug}`}>
        <div className="rounded-lg shadow-md max-w-85  relative">
        <div className="absolute z-100 right-2 top-2 flex items-center justify-center bg-[#F5F5F5] h-8 w-8 rounded-full">
          <HeartIcon/>
        </div>
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={thumbnailUrl} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full rounded-t-lg h-auto object-cover"/>
        </div>
        <Animation variant="none">
          <div className="flex w-full items-center justify-center">
            <div className="pb-4 rounded-b-lg flex flex-col items-start">
              <p className="py-2 font-bold font-playfair">{name}</p>
              <p className="pb-2 font-space">UGX {price.toLocaleString()}</p>
              <Button variant="default" className="bg-(--primary-color) rounded-none  px-2 py-2 font-semibold  flex gap-2">Add to cart <ShoppingBag color="white"/></Button>
            </div>
          </div>
        </Animation>
      </div>
      </Link>
    </Animation>

  )
  
}

export default ProductCard
