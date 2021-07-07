import React from "react";
import "./InputItem.css";

function InputItem({ Image, title, color }) {
  return (
    <div className="inputItem">
      <Image className="inputItem__image" style={{ color: color }} />
      <p>{title}</p>
    </div>
  );
}

export default InputItem;
