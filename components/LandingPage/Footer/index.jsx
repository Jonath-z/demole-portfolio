import React from "react";
import { VCopyWrite } from "../../modules/vectos";
import Contact from "../Contacts";

const day = new Date();
const year = day.getFullYear();

const Footer = () => {
  return (
    <div className=" bg-black text-white px-5 -mt-32 lg:-mt-0 pt-32 lg:pt-10">
      <Contact />
      <h1 className="text-2xl text-center py-10">Elie DEMOLE</h1>
      <ul className="py-5 flex justify-center gap-4 flex-wrap">
        <li>A propos</li>
        <li>Services</li>
        <li>Temoignage</li>
        <li>Blog</li>
      </ul>
      <p className="flex items-center justify-center gap-1 text-gray-500 text-sm">
        <span>
          <VCopyWrite />
        </span>
        <span>Demole</span>
        <span>{year}</span>
      </p>
    </div>
  );
};

export default Footer;
