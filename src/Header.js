import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import { fontSize } from "@material-ui/system";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613245385~hmac=b414caad3db2d06fcdb4d7070048a2f5"
          alt="linkedin logo"
          className="header__logo"
        />
        <div className="header__search">
          <SearchIcon style={{ color: "rgba(0,0,0,.6)", fontSize: "20px" }} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <span className="header__icon">
          <HomeIcon className="header__logo" />
          <p>Home</p>
        </span>
        <span className="header__icon">
          <PeopleIcon className="header__logo" />
          <p>People</p>
        </span>
        <span className="header__icon">
          <WorkIcon className="header__logo" />
          <p>jobs</p>
        </span>
        <span className="header__icon">
          <ChatBubbleIcon className="header__logo" />
          <p>messages</p>
        </span>
        <span className="header__icon">
          <NotificationsIcon className="header__logo" />
          <p>notification</p>
        </span>
        <span className="header__icon">
          <Avatar sizes="small" />
          <p>mahfuz</p>
        </span>
      </div>
    </div>
  );
}

export default Header;
