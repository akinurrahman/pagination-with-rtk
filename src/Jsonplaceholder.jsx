import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetDataQuery } from "./placeholderRTK";

const Jsonplaceholder = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetDataQuery(page);
  const [videos, setVideos] = useState([]);

  // Update videos state when new data arrives for the current page
  useEffect(() => {
    if (data) {
      setVideos((prevVideos) => [...prevVideos, ...data]);
    }
  }, [data]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="video-container">
      <NavLink to="/YouTubeData" className={"button"}>
        Visit YouTube DATA
      </NavLink>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="video-cards">
          {videos?.map((currElem, index) => (
            <div className="card" key={currElem.id + index}>
              <div className="card-number">Card {index + 1}</div>
              <h3>{currElem.title}</h3>
              <p>{currElem.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jsonplaceholder;
