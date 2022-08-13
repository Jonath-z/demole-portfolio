import React, { useRef } from "react";
import { services } from "../../db";
import ServiceCard from "../../modules/__modules/ServiceCard";
import useIsVisibleOnScreen from "../../modules/hooks/useIsvisibleOnScreen";

const Services = () => {
  const ref = useRef(null);
  useIsVisibleOnScreen(
    {
      root: ref.current,
      rootMargin: "10px",
      threshold: 1,
    },
    ref.current?.childNodes
  );

  return (
    <div id="service" className="px-5 mt-96 lg:mx-32 xl:mx-64 2xl:mx-96">
      <h1 className="text-2xl py-10">Mes services</h1>
      <div
        ref={ref}
        className="flex gap-4 w-full overflow-x-auto xl:overflow-hidden xl:grid xl:grid-cols-3 scroll-smooth snap-x snap-mandatory pb-10"
      >
        {services.map((service, index) => {
          return (
            <div key={index} className="transition-all snap-center">
              <ServiceCard Service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
