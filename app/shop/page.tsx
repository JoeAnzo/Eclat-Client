import { fragranceService } from "../services/fragrance.service"
import ProductCard from "@/components/ProductCard"
import { Product } from "../Interfaces/product.interface"

export default async function ShopPage() {
  const response = await fragranceService.getFragrances({})
  const products = response.data
  return (
    <section>
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



