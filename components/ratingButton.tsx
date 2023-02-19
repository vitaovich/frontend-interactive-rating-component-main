import { useRef } from "react"

const RatingButton: React.FC<{ rating: number, className: string, onRatingClick: (rating: number) => void }> = (props) => {
    const ratingRef = useRef<HTMLButtonElement>(null)

    const handleRatingClick = () => {
        if (ratingRef.current?.innerText !== undefined) {
            props.onRatingClick(parseInt(ratingRef.current?.innerText))
        }
    }
    return (
        <button className={`flex items-center justify-center w-12 h-12 rounded-full p-6 hover:bg-orange hover:text-white ${props.className}`} onClick={handleRatingClick} ref={ratingRef}>{props.rating}</button>
    )
}

export default RatingButton