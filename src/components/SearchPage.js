import React from "react";
import "./SearchPage.css";
import Sidebar from "./SideBar.js";
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
    </div>
  );
}

export default SearchPage;
