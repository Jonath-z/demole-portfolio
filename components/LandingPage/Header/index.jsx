import React from "react";
import { VMail, VMenu, VPhone } from "../../modules/vectos";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white bg-black/50 p-5  backdrop-blur-md">
        <div className="lg:block hidden">
          <ul className="hidden lg:flex gap-5">
            <a href="#about">
              <li>A propos</li>
            </a>
            <a href="#contact">
              <li>Contacts</li>
            </a>
            <a href="#service">
              <li>Services</li>
            </a>
            <a href="#feedback">
              <li>Temoignage</li>
            </a>
            <a href="#blog">
              <li>Blog</li>
            </a>
          </ul>
        </div>
        <p className="lg:hidden">
          <VMenu className="text-2xl" />
        </p>
        <ul className="flex items-center gap-4">
          <a href="mailto:eliedemole2@gmail.com">
            <li className="border p-2 rounded-full">
              <VMail className="text-2xl" />
            </li>
          </a>
          <a href="tel:+250783375293">
            <li className="border rounded-full p-3">
              <VPhone />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
