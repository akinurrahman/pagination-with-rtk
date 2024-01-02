import React from "react";

const VideoComponent = ({ video, extraInfo }) => {
  return (
    <div className="card">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="video-info">
        <h2>{video?.snippet?.title}</h2>
        <p>Channel: {extraInfo?.snippet?.title}</p>
      </div>
    </div>
  );
};

export default VideoComponent;
