import Star from "./Star";

const StarRating = () => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
            />
            <Star customClass="cursor-pointer" />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
