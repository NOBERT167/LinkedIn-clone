import React from "react";
import "./SideBar.styles.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <span sidebar_hash>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="image_background"></div>
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your profile</p>
          <p className="sidebar_statNumber">20</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on posts</p>
          <p className="sidebar_statNumber">330</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("React js")}
        {recentItems("Software engineering")}
        {recentItems("Programming")}
        {recentItems("UI/UX design")}
        {recentItems("Next js")}
      </div>
    </div>
  );
}

export default SideBar;
