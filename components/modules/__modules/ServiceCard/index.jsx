import React from "react";

const ServiceCard = ({ Service }) => {
  return (
    <div className="w-[90vw] lg:w-[60vw] xl:w-full shadow-sm  h-full bg-gradient-to-tr from-white via-gray-800/20 to-gray-800/30 rounded-xl p-5 border transition-all">
      <h2 className="text-[20px] font-bold">{Service.title}</h2>
      <p className="py-3">{Service.description}</p>
    </div>
  );
};

export default ServiceCard;
