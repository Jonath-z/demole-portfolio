/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React, { useState } from "react";
import { VMail, VMenu, VPhone, VPlus } from "../../modules/vectos";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      <div
        className={`fixed z-20 top-0 bottom-0 left-0 w-full backdrop-blur-md bg-black/30 lg:hidden ${
          isMenu
            ? "translate-x-0 transition-all"
            : "translate-x-[2000000px] transition-all"
        } `}
      >
        <ul className="lg:hidden flex flex-col gap-5 bg-white p-10 text-black rounded-b-lg relative">
          <li
            role="button"
            onClick={toggleMenu}
            className="absolute top-0 right-0 m-5 rounded-full border p-2"
          >
            <VPlus className="rotate-45" />
          </li>
          <Link href="/">
            <li role="button" onClick={toggleMenu}>
              Acceuil
            </li>
          </Link>
          <a href="#about">
            <li role="button" onClick={toggleMenu}>
              A propos
            </li>
          </a>
          <a href="#contact">
            <li role="button" onClick={toggleMenu}>
              Contacts
            </li>
          </a>
          <a href="#service">
            <li role="button" onClick={toggleMenu}>
              Services
            </li>
          </a>
          <a href="#feedback">
            <li role="button" onClick={toggleMenu}>
              Temoignage
            </li>
          </a>
          <a href="#blog">
            <li role="button" onClick={toggleMenu}>
              Blog
            </li>
          </a>
        </ul>
      </div>
      <div className="flex justify-between items-center text-white bg-black/50 p-5  backdrop-blur-md">
        <div className="lg:block hidden">
          <ul className="hidden lg:flex gap-5">
            <Link href="/">
              <li role="button" onClick={toggleMenu}>
                Acceuil
              </li>
            </Link>
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
        <p role="button" onClick={toggleMenu} className="lg:hidden">
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
