import { fragranceService } from "@/app/services/fragrance.service"
import Image from "next/image"
interface pageProps {
    params:Promise<{slug:string}>
}

export default async function fragranceDetailsPage({params}:pageProps){
    const {slug} = await params

    const response = await fragranceService.getFragranceBySlug(slug)
    const product = response.data

    console.log(product)

    return(
        <section>
            <div>
                <div>
                    <Image src={product.thumbnailUrl} alt={product.name} fill sizes="(max-width:768px) 100vw, 320px" className="max-w-full rounded-t-lg h-auto object-cover"/>
                </div>
                <div>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    )
}