import React from "react";
import "./News.css";
import News__item from "./News__item";

function News() {
  return (
    <div className="news">
      <p>LinkedIn Nesw</p>
      <div className="news_list">
        <ul>
          <li>
            <News__item />
          </li>
          <li>
            <News__item />
          </li>
          <li>
            <News__item />
          </li>
          <li>
            <News__item />
          </li>
          <li>
            <News__item />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default News;
