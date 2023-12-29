import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionIcon} title="Subscription" />
      {/* <SidebarRow title="Home"/> */}
    </div>
  );
};

export default Sidebar;
