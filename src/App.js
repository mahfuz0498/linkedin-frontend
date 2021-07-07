import React from "react";
import "./App.css";
import Header from "./Header";
import AppBody from "./AppBody";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Header />
          <AppBody />
        </div>
      )}
    </div>
  );
}

export default App;
