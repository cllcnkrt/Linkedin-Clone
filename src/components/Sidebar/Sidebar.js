import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {

  const recentItem =(topic) =>(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=webp" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Brad Pitt</h2>
        <h4>brad.pitt@gmail.com</h4>
      </div>
      
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>

        </div>
        <div className="sidebar__stat">
        <p>Views on post</p>
          <p className="sidebar__statNumber">2,451</p>
        </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactJs")}
          {recentItem("Proggraming")}
          {recentItem("Softwareengineering")}
          {recentItem("desing")}
          {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
