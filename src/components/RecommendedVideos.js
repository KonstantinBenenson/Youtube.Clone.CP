import React from "react";
import VideoCard from "./VideoCard.js";
import "./RecommendedVideos.css";

const RecommendedVideos = () => {
  const videoCards = [
    {
      image: "",
      title: "Title1",
      channel: "Extreme channel",
      views: "2.1M views",
      timestamp: "1 day ago",
      channelImage: "",
    },
    {
      image: "",
      title: "Title2",
      channel: "Delicate channel",
      views: "1.1M views",
      timestamp: "10 days ago",
      channelImage: "",
    },
    {
      image: "",
      title: "Title3",
      channel: "Sober channel",
      views: "4.6M views",
      timestamp: "5 days ago",
      channelImage: "",
    },
  ];

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
