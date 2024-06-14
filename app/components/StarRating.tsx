import Star from "./Star";

interface StarRatingProps {
  onClick: (rating: number) => void;
  rating: any;
}
const StarRating: React.FC<StarRatingProps> = ({ onClick, rating }) => {
  return (
    <div className="flex gap-2">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => onClick(ratingValue)}
            />
            <Star
              customClass={`cursor-pointer ${
                ratingValue <= rating ? "fill-[#ffc107] stroke-yellow-400" : ""
              }  `}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
