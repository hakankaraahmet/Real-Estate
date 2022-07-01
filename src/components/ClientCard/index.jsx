import React from "react";

const ClientCard = ({data}) => {
  return (

      <div className="flex flex-col justify-between p-4 bg-white shadow-lg rounded-xl" >
        <p className="text-gray-600">
          <span className="text-lg font-bold text-green-500">"</span>
         {data.content}
          <span className="text-lg font-bold text-green-500">"</span>
        </p>
        <div className="flex items-center bg-green-100 rounded-full">
            <a href="/" className="relative block">
                <img src={data.img} alt="person" className="w-10 h-10 mx-auto rounded-full"/>    
            </a>
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-green-500">
                   {data.name}
                </span>
                <span className="text-xs font-semibold">
                   {data.title}
                </span>
            </div>
        </div>
      </div>
 
  );
};

export default ClientCard;
