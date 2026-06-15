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
          <Image src={url} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full h-auto object-cover"/>
        </div>
        <Animation variant="slideUp">
          <div className="p-4">
            <p className="py-2 font-bold font-playfair">{name}</p>
            <p className="pb-2">{price}</p>
            <Button variant="default" className="rounded-none bg-(--primary-color) px-4 py-2 flex gap-2 w-25">ADD <ShoppingBag color="white"/></Button>
          </div>
        </Animation>
      </div>
    </Animation>

  )
  
}

export default ProductCard