import ThumbsDown from "./ThumbsDown";
import ThumbsUp from "./ThumbsUp";

interface RecommendProps {
  onClick: (isRecommended: boolean) => void;
  isRecommended: any;
}
const Recommend: React.FC<RecommendProps> = ({ onClick, isRecommended }) => {
  return (
    <div className="flex gap-8">
      <label>
        <input
          type="radio"
          name="recommendation"
          value={"thumbsUp"}
          className="hidden"
          onClick={() => onClick(false)}
        />
        <ThumbsDown
          customClass={`cursor-pointer  ${
            isRecommended === false ? "fill-red-500 stroke-red-600" : ""
          }`}
        />
        <p>No</p>
      </label>
      <label>
        <input
          type="radio"
          name="recommendation"
          value={"thumbsDown"}
          className="hidden"
          onClick={() => onClick(true)}
        />
        <ThumbsUp
          customClass={`cursor-pointer ${
            isRecommended === true ? "fill-green-500 stroke-green-600" : ""
          }`}
        />
        <p>Yes</p>
      </label>
    </div>
  );
};

export default Recommend;
