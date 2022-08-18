import React, { useRef, useState, useEffect } from "react";
// import { feedbacks } from "../../db";
import FeedBackCard from "../../modules/__modules/FeedBackCard";
import { VArrowLeft, VArrowRight } from "../../modules/vectos";
import useSideScroll from "../../modules/hooks/useSideScroll";
import databaseServices from "../../db/databaseServices";

const FeedBacks = () => {
  const scrollContainer = useRef(null);
  const sideScroll = useSideScroll();

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    (() => {
      databaseServices.getData("feebacks", (data) => {
        if (data) {
          setFeedbacks(data);
        } else {
          setFeedbacks([]);
        }
      });
    })();
  }, []);

  const onScrollLeft = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      -scrollContainer.current.offsetWidth
    );
  };

  const onScrollRight = () => {
    sideScroll(
      scrollContainer.current,
      40,
      200,
      scrollContainer.current.offsetWidth
    );
  };

  return (
    <>
      {feedbacks.length !== 0 && (
        <div id="feedback" className="mx-5 lg:mx-32 xl:mx-64 2xl:mx-96">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl py-5 border-b w-fit">Temoignages</h1>
            <div className="flex">
              <div
                onClick={onScrollLeft}
                tabIndex={0}
                onKeyDown={() => null}
                className="bg-primary p-2 border rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
              >
                <VArrowLeft />
              </div>
              <div
                onClick={onScrollRight}
                tabIndex={0}
                onKeyDown={() => null}
                className="bg-primary p-2 border rounded-full mx-1 cursor-pointer hover:bg-white hover:shadow-xl hover:text-primary transition-all"
              >
                <VArrowRight />
              </div>
            </div>
          </div>
          <div
            ref={scrollContainer}
            className="custom-scrollbar flex gap-5 py-5 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          >
            {feedbacks.map((feedback, index) => {
              return (
                <div key={index} className="snap-center">
                  <FeedBackCard feedback={feedback} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBacks;
