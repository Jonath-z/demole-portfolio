/* eslint-disable @next/next/no-img-element */
import React from "react";
import About from "./About";
import Articles from "./Articles_";
import Contact from "./Contacts";
import FeedBacks from "./FeedBacks";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Service_";

const LandingPage = () => {
  return (
    <div className="w-full font-poppins bg-slate-100 scroll-smooth">
      <div className="fixed z-20 w-full">
        <Header />
      </div>
      <div className="w-full h-[500px] relative">
        {/* <img
          src="/presentation-bg.jpg"
          alt="presentation"
          className="w-full h-full object-cover"
        /> */}

        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full backdrop-blur-md  bg-black">
          <div className="flex flex-col justify-center gap-5 items-center px-5 w-full h-full">
            <h1 className="text-3xl text-white 2xl:text-5xl">Elie DEMOLE</h1>
            <p className="text-center text-white">
              Je suis un freelance copywriter et createur des contenus web
            </p>
          </div>
          <About />
        </div>
      </div>
      <Services />
      <FeedBacks />
      <Articles />
      <Footer />
    </div>
  );
};

export default LandingPage;
