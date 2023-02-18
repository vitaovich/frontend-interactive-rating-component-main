import { useState } from "react";
import RatingButton from "./ratingButton";

const Rating = () => {
    const [ratings, setRatings] = useState([1,2,3,4,5])
    return (
        <div className="flex flex-row justify-center text-center text-lightGrey space-x-4 md:space-x-10">
            {
                ratings.map((rating) => (
                    <RatingButton key={rating} rating={rating}></RatingButton>
                ))
            }
        </div>
    )
}

export default Rating;