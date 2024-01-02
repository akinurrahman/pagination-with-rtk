import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink className={"button"} to="/YouTubeData">
        Visit YouTube Infinite Scroll
      </NavLink>
      <NavLink className={"button"} to="/Jsonplaceholder">
        Visit Placeholder Infinite Scroll
      </NavLink>
    </div>
  );
};

export default Home;
