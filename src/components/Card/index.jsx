import React from "react";

const Card = ({ card }) => {
  return (
    <div className="rounded shadow-lg m-5">
      <img src={card.img} alt="Home" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{card.title}</div>
        <p className="text-gray-700">{card.content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2 inline-block">{card.price.toFixed(3)} $</span>
      </div>
      <div>
        <span>{card.bedNumber} Beds</span>
        <span>{card.bathNumber} Baths</span>
      </div>
      <div>
        <button>View Property</button>
      </div>
    </div>
  );
};

export default Card;
