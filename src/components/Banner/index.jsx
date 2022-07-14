import React from "react";

const Banner = () => {
  return (
    <div className="px-4 mt-10 md:mt-16">
      <div className="sm:text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          <span className="block">Premium Properties</span>
          <span className="block text-green-500"> Non-premium Prices</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 md:text-xl sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto ">
          At prime properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constrain. Pick and choose from 1000+ properties across the globe
        </p>
        <div className="justify-center mt-5 sm:mt-8 sm:flex ">
          <div className="my-3 sm:m-2 ">
            <a href="" className="flex justify-center px-8 py-3 text-white bg-green-500 rounded-md ">View properties</a>
          </div>
          <div className="my-3 sm:m-2 ">
            <a href="" className="flex justify-center px-8 py-3 text-green-700 bg-green-200 rounded-md ">Explore locations</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
