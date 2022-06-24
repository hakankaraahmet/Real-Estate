import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("home");
  const handleRoute = (item) => {
    navigate(item !== "home" ? item : "/");
    setIsActive(item);
  };
  const routes = ["home", "service", "about", "contact"];
  return (
    <div className="bg-white shadow-lg">
      <div className=" mx-auto px-4">
        <div className="flex items-center justify-between ">
          <div className="flex space-x-7 ">
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer flex  py-3"
            >
              <FaHome size="30" className="text-green-500" />
              <span className="font-semibold text-gray-500 text-lg mx-2">
                Prime Properties
              </span>
            </div>
            <div className="hidden md:flex space-x-7  ">
              {routes.map((item, index) => (
                <nav
                  key={index}
                  className={
                    "cursor-pointer hover:text-green-500 capitalize py-4 font-semibold  transition duration-800 " +
                    (isActive === item
                      ? "border-green-500 border-b-4 text-green-500"
                      : "text-gray-500")
                  }
                  onClick={() => handleRoute(item)}
                >
                  {item}
                </nav>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
