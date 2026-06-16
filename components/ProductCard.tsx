import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import Animation from "./Animation"


function ProductCard({name,url,price}:Product) {
  return (
    <Animation variant="slideUp">
      <div className="relative rounded-md overflow-hidden border border-(--secondary-color)">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-xl z-0" />
        <div className="absolute inset-0 z-10">
          <Image src={url} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="object-cover"/>
        </div>
        <Animation variant="slideUp">
          <div className="relative p-4 z-20">
            <p className="py-2 font-bold font-playfair">{name}</p>
            <p className="pb-2 font-space">{price}</p>
            <Button variant="default" className="rounded-none bg-(--primary-color) px-4 py-2 flex gap-2 w-25">ADD <ShoppingBag color="white"/></Button>
          </div>
        </Animation>
      </div>
    </Animation>

  )
  
}

export default ProductCard