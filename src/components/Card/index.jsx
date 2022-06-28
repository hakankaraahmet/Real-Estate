import React from "react";

const Card = ({ card }) => {
  return (
    <div className="rounded shadow-lg  overflow-hidden">
      <img src={card.img} alt="Home" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.title}</div>
        <p className="text-gray-700">{card.content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2 inline-block">{card.price.toFixed(3)} $</span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{card.bedNumber} Beds</span>
        <span className = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ">{card.bathNumber} Baths</span>
      </div>
      <div className="px-6 pt-4 pb-10">
        <button className="inline-block bg-green-500 rounded-full px-4 py-1  font-bold text-white ">View Property</button>
      </div>
    </div>
  );
};


export default Card;
