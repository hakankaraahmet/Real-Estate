import React from "react";
// contstants 
import {properties} from "../../constants/properties.js";
import {locations} from "../../constants/locations.js";
//components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import SiteBanner from "../../components/SiteBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500 ">Recent Properties</h2>
      </div>
      <div className="grid gap-5 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((card) => 
          <Card  card={card} key={card?.id}/>
        )}
      </div>
      <SiteBanner bannerLocation={"upper"}/>
      <div className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500 ">Explore Locations</h2>
      </div>
      <div className="grid gap-5 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((card) => 
          <Card  card={card} key={card?.id}/>
        )}
      </div>
      <SiteBanner bannerLocation={"lower"}/>
    </>
  );
};

export default Home;
