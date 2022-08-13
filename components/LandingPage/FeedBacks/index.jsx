import React from "react";
import { feedbacks } from "../../db";
import FeedBackCard from "../../modules/__modules/FeedBackCard";

const FeedBacks = () => {
  return (
    <div id="feedback" className="mx-5 lg:mx-32 xl:mx-64 2xl:mx-96">
      <h1 className="text-2xl py-5 border-b w-fit">Temoignages</h1>
      <div className="flex gap-5 py-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {feedbacks.map((feedback, index) => {
          return (
            <div key={index} className="snap-center">
              <FeedBackCard feedback={feedback} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedBacks;
