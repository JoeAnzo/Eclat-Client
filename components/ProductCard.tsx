import Image from "next/image"


function ProductCard({image,price,alt}:{image:string,price:string,alt:string}) {
  return (
    <div>
        <Image src={image} alt={alt} style={{width:'300px',height:'300px'}}/>
        <p>{price}</p>
        <p>{alt}</p>
    </div>
  )
  
}

export default ProductCard