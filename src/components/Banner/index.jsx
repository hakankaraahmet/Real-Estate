import React from "react";

const Banner = () => {
  return (
    <div className="mt-10 px-4 md:mt-16">
      <div className="sm:text-center xl:text-left">
        <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl">
          <span className="block">Premium Properties</span>
          <span className="block text-green-500"> Non-premium Prices</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 md:text-xl sm:mt-5 sm:text-lg sm:max-w-xl  sm:mx-auto xl:mx-0">
          At prime properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
          <div>
            <a href="" className="bg-green-500 text-white px-8 py-3 flex justify-center rounded-md ">View properties</a>
          </div>
          <div className="mt-3">
            <a href="" className="bg-green-200 text-green-700 px-8 py-3 flex justify-center rounded-md ">Explore locations</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
