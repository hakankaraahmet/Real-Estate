import React from "react";

const SiteBanner = () => {
  return (
    <div className="site-banner h-screen py-20 mt-10">
      <div className="container mx-auto px-6 mt-40">
            <h2 className="text-4xl font-bold text-white mb-2">
                Experience Luxury Like Never Before
            </h2>
            <h3 className="text-2xl text-gray-200 mb-8">
               50+ Exotic locations accross the globe
            </h3>
            <button className="text-white uppercase border-2 px-8 py-4 font-bold tracking-wider shadow-lg">
                Explore Locations
            </button>
      </div>
    </div>
  );
};

export default SiteBanner;
