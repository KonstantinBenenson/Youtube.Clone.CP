import React from "react";
import RecommendedVideos from "./RecommendedVideos.js";
import Sidebar from "./SideBar.js";

function Home() {
  return (
    <div>
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default Home;
