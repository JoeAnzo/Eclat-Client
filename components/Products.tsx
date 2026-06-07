import React from 'react'
import ProductCard from './ProductCard'

function Products() {
    const products = [
  {
    id:1,
    src:'/images/bg-1.jpg',
    alt:'Image 1',
    price:'UGX 50,0000'
  },
  {
    id:2,
    src:'/images/bg-2.jpg',
    alt:'Image 2',
    price:'UGX 45,0000'
  },{
    id:4,
    src:'/images/bg-4.jpg',
    alt:'Image 4',
    price:'UGX 30,0000'
  },{
    id:5,
    src:'/images/bg-5.jpg',
    alt:'Image 5',
    price:'UGX 20,0000'
  },{
    id:6,
    src:'/images/bg-6.jpg',
    alt:'Image 6',
    price:'UGX 55,0000'
  }
]
  return (
    <div>
        {
            products.map((product) => {
                return <p key={product.id}>hey</p>
            })
        }
    </div>
  )
}

export default Products