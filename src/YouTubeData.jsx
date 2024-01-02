import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useChannelsQuery, useVideosQuery } from "./youtubeServices";
import VideoComponent from "./VideoComponent";

const YouTubeData = () => {
  // State variables initialization
  const [allVideos, setAllVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [channelInfoMap, setChannelInfoMap] = useState({});

  // Fetching videos using the custom hook useVideosQuery
  const { data: videos } = useVideosQuery({
    part: "snippet",
    chart: "mostPopular",
    regionCode: "IN",
    pageToken: pageToken,
  });

  // Extract channel IDs from fetched home videos
  const channelIds =
    videos?.items?.map((video) => video.snippet.channelId) || [];

  // Updating allVideos state when new videos are fetched
  useEffect(() => {
    if (videos?.items) {
      setAllVideos((prevVideos) => [...prevVideos, ...videos.items]);
    }
  }, [videos]);

  // Fetching extra channel information using the custom hook useChannelsQuery
  const { data: extraInfo } = useChannelsQuery({
    part: "snippet",
    id: channelIds.join(","),
  });
  // Update channelInfoMap when extraInfo changes
  useEffect(() => {
    if (extraInfo) {
      const newChannelInfoMap = { ...channelInfoMap };
      extraInfo?.items?.forEach((channel) => {
        newChannelInfoMap[channel.id] = channel;
      });
      setChannelInfoMap(newChannelInfoMap);
    }
  }, [extraInfo]);

  // Function to fetch the next page of videos
  const fetchNextPage = () => {
    if (videos?.nextPageToken) {
      setPageToken(videos.nextPageToken);
    }
  };

  // Render component
  return (
    <div>
      {/* Navigation link */}
      <NavLink to="/Jsonplaceholder" className={"button"}>
        Visit Jsonplaceholder DATA
      </NavLink>

      {/* Infinite scroll for video cards */}
      <InfiniteScroll
        dataLength={allVideos.length}
        next={fetchNextPage}
        hasMore={videos?.nextPageToken !== undefined}
        loader={<p>Loading...</p>}
        endMessage={<p>No more videos</p>}
      >
        <div className="video-cards">
          {/* Mapping each video to VideoComponent */}
          {allVideos?.map((video, index) => (
            <VideoComponent
              key={index}
              index={index}
              video={video}
              extraInfo={channelInfoMap[video.snippet.channelId]}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default YouTubeData;
