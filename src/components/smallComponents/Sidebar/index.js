import { Avatar } from "@material-ui/core";
import { selectUser } from "features/user/userSlice";
import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

const SideBar = () => {
  const user = useSelector(selectUser);

  const RecentItem = ({ topic }) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p className="topic">{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://i.pinimg.com/originals/cf/b3/7e/cfb37e7eebaf13f140d53a98ffd68214.png"
          alt="profilePort"
          width="100%"
        />
        <Avatar
          className="avatar_image"
          src={user?.photoUrl}
          alt={user?.displayName}
        />
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
        <h6>Desarrollador de software</h6>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        <RecentItem topic="Desarrollo" />
        <RecentItem topic="React" />
        <RecentItem topic="Next" />
        <RecentItem topic="React Native" />
      </div>
    </div>
  );
};

export default SideBar;
