import React from "react";

const Card = ({ card }) => {
  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img src={card.img} alt="Home" className={card.price ? "w-full" : "w-full h-1/2"} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{card.title}</div>
        <p className="text-gray-700">{card.content}</p>
      </div>
      {card.price && (
        <>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-bold text-green-300">
              {card.price.toFixed(3)} $
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              {card.bedNumber} Beds
            </span>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full ">
              {card.bathNumber} Baths
            </span>
          </div>
          <div className="px-6 pt-4 pb-10">
            <button className="inline-block px-4 py-1 font-bold text-white bg-green-500 rounded-full ">
              View Property
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
