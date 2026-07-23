import { fragranceService } from "@/app/services/fragrance.service"
import Image from "next/image"
import { notFound } from "next/navigation"
import ProductButtons from "@/components/ProductButtons"

interface pageProps {
    params: Promise<{ slug: string }>
}

export default async function fragranceDetailsPage({ params }: pageProps) {
    const { slug } = await params

    const response = await fragranceService.getFragranceBySlug(slug)
    const product = response.fragrance

    console.log(product)

    if (!product) {
        notFound() 
    }

    return (
        <section className="min-h-screen">
            <div className="flex flex-col md:flex-row">
                
                <div className="relative max-w-200 h-100"> 
                    <Image 
                        src={product.thumbnailUrl} 
                        alt={product.name} 
                        fill 
                        sizes="(max-width:768px) 100vw, 320px" 
                        className="rounded-t-lg object-cover max-w-200 max-h-200 border"
                        priority 
                    />
                </div>
                <div className="flex flex-col gap-2 justify-center items-left">
                    <h1 className="px-4 font-bold font-playfair text-xl">{product.name}</h1>
                    <h2 className="px-4 text-md">Size: {product.volume}</h2>
                    <p className="px-4 font-bold text-sm">Concentration: {product.concentration}</p>
                    <p className="px-4 font-space">Price:UGX{product.price.toLocaleString()}</p>
                    <div className="flex flex-col gap-2 sticky bottom-0">
                    <ProductButtons product={product}/>
                    </div>
                    <h2 className="px-4 text-md font-bold font-sans">Product Description:</h2>
                    <p className="px-4 font-sans">Product{product.description}</p>
                </div>
            </div>
        </section>
    )
}