import { fragranceService } from "@/app/services/fragrance.service"
import Image from "next/image"
import { notFound } from "next/navigation"

interface pageProps {
    params: Promise<{ slug: string }>
}

export default async function fragranceDetailsPage({ params }: pageProps) {
    const { slug } = await params

    const response = await fragranceService.getFragranceBySlug(slug)
    const product = response?.data

    if (!product) {
        notFound() 
    }

    return (
        <section>
            <div>
                
                <div className="relative w-full h-[400px]"> 
                    <Image 
                        src={product.thumbnailUrl} 
                        alt={product.name} 
                        fill 
                        sizes="(max-width:768px) 100vw, 320px" 
                        className="rounded-t-lg object-cover"
                        priority 
                    />
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    )
}