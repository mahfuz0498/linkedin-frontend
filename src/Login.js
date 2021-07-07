import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import firebase from "firebase";
function Login() {
  const [name, setName] = useState("");
  const [portfolio, setPort] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const register = e => {
    e.preventDefault();
    if (!name) {
      return alert("please enter name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        console.log(userAuth);
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: portfolio
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: portfolio
              })
            );
          });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };
  const login = e => {
    // e.preventDefault();
    console.log(name + " " + portfolio + " " + email + " " + password);
    // setName("");
    // setPort("");
    // setEmail("");
    // setPass("");
  };
  return (
    <div className="login">
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1613245385~hmac=b414caad3db2d06fcdb4d7070048a2f5"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="full name (required if register)"
          type="text"
        />
        <input
          value={portfolio}
          onChange={e => setPort(e.target.value)}
          placeholder="portfolio pic url"
          type="text"
        />
        <input
          className="login__input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          className="login__input"
          value={password}
          onChange={e => setPass(e.target.value)}
          placeholder="password"
          type="password"
        />
        <button type="submit" onClick={login}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
