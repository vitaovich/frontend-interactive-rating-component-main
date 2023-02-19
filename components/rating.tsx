import { useState } from "react";
import RatingButton from "./ratingButton";

const Rating: React.FC<{ rating: number, updateRateHandler: (rating: number) => void }> = (props) => {
    const [ratings, setRatings] = useState([1,2,3,4,5])

    const ratingHandler = (rating: number) => {
        props.updateRateHandler(rating)
    }
    
    return (
        <div className="flex flex-row justify-center text-center text-lightGrey space-x-4 md:space-x-10">
            {
                ratings.map((rating) => (
                    <RatingButton key={rating} rating={rating} onRatingClick={ratingHandler} className={props.rating == rating ? 'bg-mediumGrey text-white' : 'bg-darkBlue'}></RatingButton>
                ))
            }
        </div>
    )
}

export default Rating;