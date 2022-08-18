import React, { useState, useEffect } from "react";
import ArticleCard from "../../modules/__modules/ArticleCard";
import databaseServices from "../../db/databaseServices";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      databaseServices.getData("articles", (data) => {
        if (data) {
          setArticles(data);
        }
      });
    })();
  }, []);

  return (
    <div id="blog" className="mx-5 lg:mx-32 xl:mx-64 2xl:mx-96">
      <h1 className="text-2xl py-5 border-b w-fit">Blog</h1>
      <div className="flex lg:grid lg:grid-cols-2 transition-all 2xl:grid-cols-3 gap-5 py-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {articles.map((article, index) => {
          return (
            <div key={index} className="snap-center w-full">
              <ArticleCard article={article} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
