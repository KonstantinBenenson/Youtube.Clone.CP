import React from "react";
import VideoCard from "./VideoCard.js";
import "./RecommendedVideos.css";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Some long title which I was not able to imagine"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
        <VideoCard
          title="Title1"
          channel="Sober channel"
          views="4.6M views"
          timestamp="5 days ago"
          channelImage=""
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
