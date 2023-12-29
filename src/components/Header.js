import React from "react";
import "./Header.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          alt="Youtube logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>

      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Remy Sharp"
          src="youtube-cp\src\static\img\naughty-cat.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
