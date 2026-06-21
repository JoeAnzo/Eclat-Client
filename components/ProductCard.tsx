import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import Animation from "./Animation"


function ProductCard({name,url,price}:Product) {
  return (
    <Animation variant="slideUp">
      <div className="rounded-lg">
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={url} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full rounded-t-lg h-auto object-cover"/>
        </div>
        <Animation variant="slideDown">
            <div className="bg-[#F5F5F5] backdrop-blur-xl backdrop-filter flex flex-col items-center">
              <p className="py-2 font-bold font-playfair">{name}</p>
              <p className="pb-2 font-space">{price}</p>
              <Button variant="default" className="rounded-lg pb-2 bg-(--primary-color) h-12 px-8 font-semibold  flex gap-2">Add to cart <ShoppingBag color="white"/></Button>
            </div>
        </Animation>
      </div>
    </Animation>

  )
  
}

export default ProductCard