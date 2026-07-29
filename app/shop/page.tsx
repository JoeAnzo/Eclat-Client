import { fragranceService } from "../services/fragrance.service"
import ProductCard from "@/components/ProductCard"
import { Product } from "../Interfaces/product.interface"
import SearchAndFilter from "@/components/SearchAndFilter"
import { brand } from "../Interfaces/product.interface"

export default async function ShopPage() {
  const fragranceResponse = await fragranceService.getFragrances({limit:7})
  const brandsResponse = await fragranceService.getFragranceBrands()
  const brands:brand[] = brandsResponse.data
  const products = fragranceResponse.data
  return (
    <section className="pt-20">
    <SearchAndFilter brands={brands}/>
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



