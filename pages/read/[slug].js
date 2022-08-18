/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import databaseServices from "../../components/db/databaseServices";
import ReactMarkdown from "react-markdown";
import Header from "../../components/LandingPage/Header";

const Read = ({ articleId }) => {
  const [currentArticle, setCurrentArticle] = useState({
    id: "",
    title: "",
    cover: "",
    content: "",
    date: "",
    time: "",
    author: "",
    readTime: "",
    presentation: "",
  });

  useEffect(() => {
    (async () => {
      databaseServices.getData("articles", (articles) => {
        console.log("article id", articleId);
        const article = articles.filter(
          (article) => article.id === articleId
        )[0];

        console.log("current article", article);

        setCurrentArticle(article);
      });
    })();
  }, [articleId]);

  return (
    <>
      <div className="fixed z-20 w-full top-0">
        <Header />
      </div>
      <div className="w-full h-screen overflow-y-auto pt-24 p-5 bg-slate-100">
        {currentArticle ? (
          <div className="flex flex-col gap-7">
            <h1 className="text-center text-4xl">{currentArticle.title}</h1>
            <img
              src={currentArticle.cover}
              alt={currentArticle.title}
              className="rounded-md object-cover lg:w-[800px] lg:h-[500px] mx-auto"
            />
            <ReactMarkdown className="readMarkdown text-lg w-full lg:w-[800px] mx-auto">
              {currentArticle.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <p>Article not found</p>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  return {
    props: {
      articleId: slug,
    },
  };
};

export default Read;
