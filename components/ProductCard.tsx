import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import Animation from "./Animation"


function ProductCard({name,url,price}:Product) {
  return (
    <Animation variant="slideUp">
      <div className="border border-(--secondary-color)  rounded-md bg-white/30 backdrop-blur-xl backdrop-filter">
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={url} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full border-b border-(--secondary-color) h-auto object-cover"/>
        </div>
        <Animation variant="slideUp">
          <div className="relative bg-(--background)">
            <div className="p-4 absolute top-0 bottom-0 left-0 right-0 bg-white/30 backdrop-blur-xl backdrop-filter">
            <p className="py-2 font-bold font-playfair">{name}</p>
            <p className="pb-2 font-space">{price}</p>
            <Button variant="default" className="rounded-none bg-(--primary-color) h-12 px-8 font-semibold  flex gap-2">ADD <ShoppingBag color="white"/></Button>
          </div>
          </div>
          <div className="p-4">
            <p className="py-2 font-bold font-playfair">{name}</p>
            <p className="pb-2 font-space">{price}</p>
            <Button variant="default" className="rounded-none bg-(--primary-color) h-12 px-8 font-semibold  flex gap-2">ADD <ShoppingBag color="white"/></Button>
          </div>
        </Animation>
      </div>
    </Animation>

  )
  
}

export default ProductCard