import ThumbsDown from "./ThumbsDown";
import ThumbsUp from "./ThumbsUp";

const Recommend = () => {
  return (
    <div className="flex gap-10">
      <label>
        <input
          type="radio"
          name="recommendation"
          value={"thumbsUp"}
          className="hidden"
        />
        <ThumbsDown customClass="cursor-pointer" />
        <p>No</p>
      </label>
      <label>
        <input
          type="radio"
          name="recommendation"
          value={"thumbsDown"}
          className="hidden"
        />
        <ThumbsUp customClass="cursor-pointer" />
        <p>Yes</p>
      </label>
    </div>
  );
};

export default Recommend;
