import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import YouTubeData from "./YouTubeData";
import Jsonplaceholder from "./Jsonplaceholder";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Jsonplaceholder" element={<Jsonplaceholder />} />
        <Route path="/YouTubeData" element={<YouTubeData />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
