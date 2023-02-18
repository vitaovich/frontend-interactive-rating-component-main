const RatingButton: React.FC<{ rating: number }> = (props) => {
    return (
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-darkBlue p-6 hover:bg-orange hover:text-white"><span>{props.rating}</span></button>
    )
}

export default RatingButton