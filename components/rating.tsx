import { useState } from "react";
import RatingButton from "./ratingButton";

const Rating = () => {
    const [ratings, setRatings] = useState([1,2,3,4,5])
    const [curRating, setRating] = useState<number>(0)

    const ratingHandler = (rating: number) => {
        setRating(rating)
    }
    
    return (
        <div className="flex flex-row justify-center text-center text-lightGrey space-x-4 md:space-x-10">
            {
                ratings.map((rating) => (
                    <RatingButton key={rating} rating={rating} onRatingClick={ratingHandler} className={curRating == rating ? 'bg-mediumGrey text-white' : 'bg-darkBlue'}></RatingButton>
                ))
            }
        </div>
    )
}

export default Rating;