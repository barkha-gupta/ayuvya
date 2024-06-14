import Card from "../components/Card";
import Experience from "../components/Experience";
import Recommend from "../components/Recommend";
import StarRating from "../components/StarRating";

const Page = () => {
  return (
    <div className="border m-4 p-4 w-[600px] border-slate-700 flex flex-col flex-wrap">
      <h2>Leave a review</h2>
      <br />
      <Card heading="Safety" description="How safe did you feel with Trausti?">
        <StarRating />
      </Card>
      <Card
        heading="Communication"
        description="How easy was to communicate with Trausti?"
      >
        <StarRating />
      </Card>
      <Card
        heading="Would you recommend Trausti?"
        description="Your opinion won't be posted publicly"
      >
        <Recommend />
      </Card>
      <Card heading="Praise" description="What traits best describe Trausti?">
        <Experience />
      </Card>
      <Card
        heading="Care to share more"
        description="How was your overall experience? Whats that one thing you won't forget Trausti for?"
      >
        <textarea
          name="experience"
          rows={8}
          cols={50}
          className="p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        />
      </Card>

      <button>PUBLISH REVIEW</button>
    </div>
  );
};

export default Page;
