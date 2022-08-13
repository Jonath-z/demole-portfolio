import React from "react";
import { VMail, VPhone } from "../../modules/vectos";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-white flex flex-col gap-5 mr-2 p-10 rounded-2xl text-black lg:mx-28 xl:mx-56"
    >
      <a href="mailto:eliedemole2@gmail.com">
        <p className="flex items-center gap-5">
          <span className="p-3 border rounded-full">
            <VMail className="text-2xl" />
          </span>
          <span>eliedemole2@gmail.com</span>
        </p>
      </a>
      <a href="tel:+250783375293">
        <p className="flex items-center gap-5">
          <span className="p-3 border rounded-full">
            <VPhone className="text-2xl" />
          </span>
          <span>+250 783 375 293</span>
        </p>
      </a>
    </div>
  );
};

export default Contact;
