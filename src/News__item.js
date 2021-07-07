import React from "react";
import "./News__item.css";

function News__item({ heading = "hello", paragraph = "some paragraph" }) {
  return (
    <div className="newsItem">
      <h4>{heading}</h4>
      <p>{paragraph}</p>
    </div>
  );
}

export default News__item;
