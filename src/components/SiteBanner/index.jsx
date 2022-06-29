import React from "react";

const SiteBanner = ({ bannerLocation }) => {
  return (
    <div
      className={`py-20 mt-10 ${
        bannerLocation === "upper" ? "upper-banner h-screen" : "lower-banner"
      } `}
    >
      <div className={`container  mx-auto ${
            bannerLocation === "upper"
              ? "mt-40 px-6"
              : "mt-0 px-12"
          }`}>
        <h2 className="mb-2 text-4xl font-bold text-white">
          {bannerLocation === "upper"
            ? "Experience Luxury Like Never Before"
            : "Save upto 50% on broker commisions"}
        </h2>
        <h3 className="mb-8 text-2xl text-gray-200">
          {bannerLocation === "upper"
            ? "50+ Exotic locations accross the globe"
            : "Lowest brokerage fees"}
        </h3>
        <button
          className={`px-8 py-4 font-bold tracking-wider  uppercase shadow-lg ${
            bannerLocation === "upper"
              ? "text-white border-2 "
              : "text-black bg-white rounded-2xl"
          }`}
        >
          {bannerLocation === "upper" ? " Explore Locations" : "Enquire"}
        </button>
      </div>
    </div>
  );
};

export default SiteBanner;
