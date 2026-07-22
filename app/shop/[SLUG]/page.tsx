import { fragranceService } from "@/app/services/fragrance.service"
interface pageProps {
    params:Promise<{slug:string}>
}

export default async function fragranceDetailsPaage({params}:pageProps){
    const {slug} = await params

    const response = await fragranceService.getFragranceBySlug(slug)
    const product = response.data

    return(
        <section>
            <div>
                <div>
                    thumbnail goes here
                </div>
                <div>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
        </section>
    )
}