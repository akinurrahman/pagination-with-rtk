import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useVideoQuery } from "./youtubeServices";

const YouTubeData = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const { data, isLoading } = useVideoQuery({
    part: "snippet",
    chart: "mostPopular",
    regionCode: "IN",
    pageToken: pageToken,
  });

  useEffect(() => {
    if (data?.items) {
      setVideos((prevVideos) => [...prevVideos, ...data.items]);
    }
  }, [data]);

  const fetchNextPage = () => {
    if (data?.nextPageToken) {
      setPageToken(data.nextPageToken);
    }
  };

  return (
    <div>
      <NavLink to="/Jsonplaceholder" className={"button"}>
        Visit Jsonplaceholder DATA
      </NavLink>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="video-cards">
          {videos.map((currElem, index) => (
            <div className="card" key={currElem.id + index}>
              <div className="card-number">Video No {index + 1}</div>
              <img src={currElem?.snippet?.thumbnails?.medium?.url} alt="" />
            </div>
          ))}
        </div>
      )}
      {data?.nextPageToken && (
        <button className="button" onClick={fetchNextPage}>
          Next Page
        </button>
      )}
    </div>
  );
};

export default YouTubeData;
