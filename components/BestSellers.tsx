import { Product } from '@/app/Interfaces/product.interface'
import { fragranceService } from '@/app/services/fragrance.service'
import ProductCard from './ProductCard'

async function BestSellers() {


  const response = await fragranceService.getFragrances({
    page:1,
    limit:4
  })

  const bestSellers = response.data

  return (
    <div className="px-2 grid grid-cols-2 gap-2 max-w-180 mx-auto">
      {
        bestSellers.map((product:Product) => {
          return <ProductCard key={product.id} price={product.price} name={product.name} thumbnailUrl={product.thumbnailUrl} slug={product.slug} gender={product.gender}/>
        })
      }
    </div>
  )
}

export default BestSellers