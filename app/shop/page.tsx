import { fragranceService } from "../services/fragrance.service"
import ProductCard from "@/components/ProductCard"
import { Product } from "../Interfaces/product.interface"
import { Search } from "lucide-react"

export default async function ShopPage() {
  const response = await fragranceService.getFragrances({limit:7})
  const products = response.data
  return (
    <section>
    <div className="flex gap-2 pt-8">
      <input type="text" className="bg-[#F5F5F5]" placeholder="search brands,category"/>
      <Search/>
    </div>
    <div className="px-2 grid grid-cols-2 gap-2 max-w-180 mx-auto">
      {
        products.map((product:Product) => {
          return <ProductCard key={product.id} price={product.price} name={product.name} thumbnailUrl={product.thumbnailUrl} slug={product.slug} gender={product.gender}/>
        })
      }
    </div>
    </section>
  )
}



