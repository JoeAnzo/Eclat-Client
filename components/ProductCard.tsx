import Image from "next/image"
import { Product } from "@/app/Interfaces/product.interface"
import { Button } from "./ui/button"
import { ShoppingBag } from "lucide-react"
import Animation from "./Animation"


function ProductCard({name,url,price}:Product) {
  return (
    <Animation variant="slideUp">
      <div className="rounded-lg shadow-md border max-w-85 border-(--secondary-color)">
        <div className="relative h-80 w-full overflow-hidden">
          <Image src={url} alt={name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full rounded-t-lg h-auto object-cover"/>
        </div>
        <Animation variant="slideDown">
            <div className="bg-[#F5F5F5] pb-4 rounded-b-lg flex flex-col items-center">
              <p className="py-2 font-bold font-playfair">{name}</p>
              <p className="pb-2 font-space">{price}</p>
              <Button variant="default" className="rounded-lg bg-(--primary-color) h-12 px-8 font-semibold  flex gap-2">Add to cart <ShoppingBag color="white"/></Button>
            </div>
        </Animation>
      </div>
    </Animation>

  )
  
}

export default ProductCard
