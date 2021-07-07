import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputItem from "./InputItem";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

function Post({
  name = "mahfuz",
  description = "software developer",
  message = "all good ",
  photoUrl = ""
}) {
  return (
    <div className="post">
      <div className="post__line1">
        <div className="post__line1_a">
          <Avatar />
          <div>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
        </div>
        <p className="post__message">{message}</p>
      </div>
      <img src={photoUrl} alt="" />
      <div className="post__line2">
        <InputItem Image={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
        <InputItem Image={ChatOutlinedIcon} title="Comment" color="grey" />
        <InputItem Image={ShareIcon} title="Share" color="grey" />
        <InputItem Image={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
}

export default Post;
