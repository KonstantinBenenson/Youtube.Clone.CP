import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  numberOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <VerifiedIcon className="channelRow__text__verified" />}
        </h4>
        <p>
          {subs} subscribers * {numberOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
