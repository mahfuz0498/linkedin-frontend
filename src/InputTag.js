import React, { useState } from "react";
import "./InputTag.css";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";
import firebase from "firebase";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
function InputTag() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: "mahfuz",
      description: "test",
      message: value,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setValue("");
  };
  return (
    <div className="inputTag">
      <Avatar />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="start a post"
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <button type="submit" className="inputButton">
          <SendOutlinedIcon className="inputIcon" />
        </button>
      </form>
    </div>
  );
}

export default InputTag;
