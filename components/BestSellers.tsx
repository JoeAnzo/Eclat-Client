import axios from 'axios'
import ProductCard from './ProductCard'

async function BestSellers() {

  try {
    const response = await axios.get('https://api.fragella.com/api/v1/fragrances',{
      params:{
        search:'Chanel',
        limit:4
      },
      headers:{
        'x-api-key': process.env.FRAGELLA_API_KEY,
        'Accept':'application/json'
      }
    })
    const products = await response.data
    console.log('Fetched products:', products)

  } catch (error){
    console.error('Error fetching perfumes', error)
    return []
  }

  return (
    <div>

    </div>
  )
}

export default BestSellers