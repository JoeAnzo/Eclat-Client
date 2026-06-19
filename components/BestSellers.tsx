import { Product } from '@/app/Interfaces/product.interface'
import ProductCard from './ProductCard'

async function BestSellers() {


  const bestSellers:Product[] = [
    {
      id:1,
      name:'Bleu De Chanel',
      url:'/images/BestSellers/Blue.jpg',
      price:'UGX 25,000'
    },{
      id:2,
      name:'coco-mademoiselle',
      url:'/images/BestSellers/coco.jpg',
      price:'UGX 30,000'
    },{
      id:3,
      name:'Miss Dior',
      url:'/images/BestSellers/Dior.jpg',
      price:'UGX 45,000'
    },{
      id:4,
      name:'Urban-Woman-Paradise',
      url:'/images/BestSellers/Urban-Women-Paradise.jpg',
      price:'UGX 65000'
    }
  ]

  return (
    <div className="p-4 space-y-8 grid grid-cols-1 sm:grid-cols-2">
      {
        bestSellers.map((product) => {
          return <ProductCard key={product.id} price={product.price} name={product.name} url={product.url} />
        })
      }
    </div>
  )
}

export default BestSellers