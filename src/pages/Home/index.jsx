import React from "react";
// contstants 
import {properties} from "../../constants/properties.js";
//components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import SiteBanner from "../../components/SiteBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="mt-5 p-10 flex justify-center">
        <h2 className="text-3xl text-gray-500  mb-2 ">Recent Properties</h2>
      </div>
      <div className="grid p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {properties.map((card) => 
          <Card  card={card} key={card?.id}/>
        )}
      </div>
      <SiteBanner/>
    </>
  );
};

export default Home;
