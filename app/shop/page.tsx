import { fragranceService } from "../services/fragrance.service"
import ProductCard from "@/components/ProductCard"
import { Product } from "../Interfaces/product.interface"
import SearchAndFilter from "@/components/SearchAndFilter"

type selectedBrand = string | undefined


export default async function ShopPage() {
  const fragranceResponse = await fragranceService.getFragrances({limit:7})
  const brandsResponse = await fragranceService.getAvailableBrands()
  const brands = brandsResponse.available
  let fragrances = fragranceResponse.data
  let selectedBrand:selectedBrand;

  if (selectedBrand !== '' || selectedBrand !== undefined) {
    const fragranceResponse = await fragranceService.getAvailableFragranceByBrand(selectedBrand)
    const newFragranceList = fragranceResponse.data
    fragrances = newFragranceList
  }

  return (
    <section className="pt-25">
    <SearchAndFilter brands={brands} selectedBrand={selectedBrand}/>
    <div className="px-2 grid grid-cols-2 gap-2 max-w-180 mx-auto">
      {
        fragrances?.map((product:Product) => {
          return <ProductCard key={product.id} price={product.price} name={product.name} thumbnailUrl={product.thumbnailUrl} slug={product.slug} gender={product.gender}/>
        })
      }
    </div>
    </section>
  )
}



