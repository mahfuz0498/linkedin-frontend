import React from "react";
import "./Inputbar.css";
import InputTag from "./InputTag";
import ImageIcon from "@material-ui/icons/Image";
import InputItem from "./InputItem";
import VideocamSharpIcon from "@material-ui/icons/VideocamSharp";
import EventNoteSharpIcon from "@material-ui/icons/EventNoteSharp";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";

function Inputbar() {
  return (
    <div className="inputbar">
      <InputTag />
      <div className="inputItems">
        <InputItem Image={ImageIcon} title="Photo" color="rgba(26, 181, 237)" />
        <InputItem
          Image={VideocamSharpIcon}
          title="Video"
          color="rgba(64, 207, 78)"
        />
        <InputItem
          Image={EventNoteSharpIcon}
          title="Event"
          color="rgba(166, 149, 20)"
        />
        <InputItem
          Image={AssignmentSharpIcon}
          title="Write article"
          color="rgba(235, 114, 45)"
        />
      </div>
    </div>
  );
}

export default Inputbar;
