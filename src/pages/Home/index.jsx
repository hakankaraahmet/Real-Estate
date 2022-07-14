import React from "react";
// contstants 
import {properties} from "../../constants/properties.js";
import {locations} from "../../constants/locations.js";
//components
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Form from "../../components/Form";
import SiteBanner from "../../components/SiteBanner";
import ClientCard from "../../components/ClientCard/index.jsx";
import { clients } from "../../constants/clients.js";

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
      <div className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500 ">What Clients Say About Us ?</h2>
      </div>
      <div className="grid gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {clients.map(client => (
          <ClientCard key={client.id} data={client}/>
        ))}
      </div>
      <div className="flex justify-center p-10 mt-5">
        <h2 className="mb-2 text-3xl text-gray-500 ">Contact Us</h2>
      </div>
      <div className="flex items-center justify-center p-10 mt-5 bg-green-300">
        <Form/>
      </div>
    </>
  );
};

export default Home;
