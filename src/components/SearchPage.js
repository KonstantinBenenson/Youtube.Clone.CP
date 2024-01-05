import React from "react";
import "./SearchPage.css";
import Sidebar from "./SideBar.js";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const SearchPage = () => {
  return (
    <div>
      <div className="app__page">
        <Sidebar />
        <SearchPage_Component />
      </div>
    </div>
  );
};

/**
 * A separate component for us to more aesthatically use Sidebar with it (because we need to use a classname app__page to implement a flex with 0.2-0.8 ratio).
 */
function SearchPage_Component() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon className="searchPage__tuneOutlinedIcon" />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="/img/itsme.jpg"
        channel="Markell_TheBeast"
        verified
        subs="1.3M"
        numberOfVideos="495"
        description="Some not particular channel that I imagined and placed here as a placeholder."
      />
      <hr />

      <VideoRow
        views="56K"
        subs="1.3M"
        description="Some not particular channel that I imagined and placed here as a placeholder."
        timestamp="1 day ago"
        channel="Markell_TheBeast"
        title="How to make a great developer out of an ordinary psychologist?"
        image="/img/img1.jpg"
      />
      <VideoRow
        views="56K"
        subs="424K"
        description="Real Madrid is the best football club on Earth!"
        timestamp="10 days ago"
        channel="Markell_TheBeast"
        title="I like to watch football, but what if they lose..."
        image="/img/rm_logo.jpeg"
      />
      <VideoRow
        views="56K"
        subs="20K"
        description="I`ve tried my best. Don`t judge."
        timestamp="5 days ago"
        channel="Markell_TheBeast"
        title="Incredible video!!"
        image="/img/creep.jpg"
      />
    </div>
  );
}

export default SearchPage;
