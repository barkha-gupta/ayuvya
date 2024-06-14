"use client";
import { useState } from "react";
import Card from "../components/Card";
import PraiseComp from "../components/Praise";
import Recommend from "../components/Recommend";
import Loader from "../components/Loader";
import StarRating from "../components/StarRating";
import { Praise, State, initialState } from "../utils";

const Page = () => {
  const [review, setReview] = useState<State>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (key: keyof State, value: any) => {
    setReview((pre) => {
      if (key === "praise") {
        const newPraise = {
          ...pre.praise,
          [value]: !pre.praise[value as keyof Praise],
        };
        return { ...pre, praise: newPraise };
      }
      return { ...pre, [key]: value };
    });
  };

  const handleSubmit = async () => {
    if (localStorage.getItem("review")) {
      localStorage.clear();
    }
    setLoading(true);

    await new Promise((r) => setTimeout(r, 2000)); //delaying for seeing the loading state
    setLoading(false);

    //we can make an api call to store details
    //i am just using local storage here
    localStorage.setItem("review", JSON.stringify(review));

    alert("Review Submitted"); // we could add a toast notification here
  };

  return (
    <div className="flex flex-col flex-wrap space-y-8 m-4 md:w-[600px] md:m-8">
      <div>
        <h2 className="text-3xl font-[700]">Leave a review</h2>
      </div>

      <Card heading="Safety" description="How safe did you feel with Trausti?">
        <StarRating
          onClick={(value: any) => handleClick("safety", value)}
          rating={review.safety}
        />
      </Card>

      <Card
        heading="Communication"
        description="How easy was to communicate with Trausti?"
      >
        <StarRating
          onClick={(value: any) => handleClick("communication", value)}
          rating={review.communication}
        />
      </Card>

      <Card
        heading="Would you recommend Trausti?"
        description="Your opinion won't be posted publicly"
      >
        <Recommend
          onClick={(value: any) => handleClick("isRecommended", value)}
          isRecommended={review.isRecommended}
        />
      </Card>

      <Card heading="Praise" description="What traits best describe Trausti?">
        <PraiseComp
          onClick={(value: any) => handleClick("praise", value)}
          praise={review.praise}
        />
      </Card>

      <Card
        heading="Care to share more"
        description="How was your overall experience? Whats that one thing you won't forget Trausti for?"
      >
        <textarea
          name="experience"
          rows={8}
          cols={32}
          placeholder="come on, you know the drill.."
          className="p-2.5 w-[100%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          onChange={(e) => handleClick("experience", e.target.value)}
        />
      </Card>

      <div className="text-center">
        <button
          className="border rounded-md mb-4 w-[100%] text-center py-2 font-[600] bg-[#9eaefc] text-[#0D1282] shadow-md hover:bg-[#7d93fd]"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loader /> : "PUBLISH REVIEW"}
        </button>
      </div>
    </div>
  );
};

export default Page;
