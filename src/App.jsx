import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
