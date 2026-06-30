import { Star,StarHalf } from "lucide-react"

interface starRatingProps {
    rating:number
}


export default function StarRating({rating}:starRatingProps) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5 stars`}>
        {[1,2,3,4,5].map((index) => {
            const isFullStar = index <= rating;

            const isHalfStar = !isFullStar && rating >= index - 0.5

            if (isFullStar) {
                return (
                    <Star key={index}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                )
            }

            if (isHalfStar) {
                return (
                    <StarHalf
                    key={index}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                )
            }
            return(
                <Star
                key={index}
                className="h-4 w-4 text-gray-300 fill-transparent"
                />
            )

        })}
    </div>
  )
}

 