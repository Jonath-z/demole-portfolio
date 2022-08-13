/* eslint-disable @next/next/no-img-element */
import React from "react";

const FeedBackCard = ({ feedback }) => {
  return (
    <div className="flex flex-col w-[90vw] lg:w-[60vw] xl:w-[50vw]  h-full border bg-white shadow-sm rounded-3xl relative">
      <div className="flex items-center p-5 gap-4">
        <img
          src={feedback.authorAvatarUrl}
          alt={feedback.authorName}
          className="h-20 w-20 object-cover  author-profile rounded-full"
        />
        <div className="flex flex-col">
          <p className="font-bold text-cyan-600">{feedback.authorName}</p>
          <p className="text-gray-400 text-sm">{feedback.authorRole}</p>
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col gap-5">
        <p>{feedback.message}</p>
      </div>
    </div>
  );
};

export default FeedBackCard;
