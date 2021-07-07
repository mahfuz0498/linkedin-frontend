import React from "react";
import "./AppBody.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";

function AppBody() {
  return (
    <div className="appBody">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default AppBody;
