/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";

const ArticleCard = ({ article }) => {
  const route = useRouter();

  return (
    <div className="bg-white flex-col rounded-2xl border shadow-sm w-[90vw] lg:w-full ">
      <img
        src={article.cover}
        alt={article.title}
        className="w-full rounded-t-2xl h-56 object-cover"
      />
      <div className="p-5">
        <h1 className="text-2xl py-4 border-b">{article.title}</h1>
        <p className="pt-4">{article.presentation}</p>
      </div>
      <button
        onClick={() => route.push(`/read/${article.id}`)}
        className="m-5 border border-cyan-500 px-7 py-2 rounded-md hover:bg-cyan-400 transition-all"
      >
        Lire
      </button>
    </div>
  );
};

export default ArticleCard;
