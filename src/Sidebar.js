import React from "react";
import "./Sidebar.css";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg/cumulus-cloud.jpg/metofficegovuk%3AheroSmall"
          alt=""
        />
        <Avatar className="sidebarAvatar" />
        <div className="sidebar__topA">
          <h3>Mahfuz Hasan</h3>
          <p> react | mongoDB | machine learning | Data science</p>
        </div>
        <div className="sidebar__topB">
          <div className="sidebar__topBItem">
            <p>connections</p>
            <h5>99</h5>
          </div>
          <h4>Grow your network</h4>
          <div className="sidebar__topBItem">
            <p>who viewed your profile</p>
            <h5>19</h5>
          </div>
        </div>
        <div className="sidebar__topC">
          <TurnedInIcon className="sidebar__topCIcon" />
          <h4>My Items</h4>
        </div>
      </div>
      <div className="sidebar__middle">
        <p>Recent</p>
        <h4># jobs</h4>
        <h4># india</h4>
        <h4># Develoeper</h4>
        <h4># look at profile plz</h4>
      </div>
    </div>
  );
}

export default Sidebar;
