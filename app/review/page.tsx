import Card from "../components/Card";
import StarRating from "../components/StarRating";

const Page = () => {
  return (
    <div>
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
        //thumbs up and down
      </Card>
      <Card heading="Praise" description="What traits best describe Trausti?">
        //small divs
      </Card>
      <Card
        heading="Care to share more"
        description="How was your overall experience? Whats that one thing you won't forget Trausti for?"
      >
        //textbox
      </Card>
    </div>
  );
};

export default Page;
