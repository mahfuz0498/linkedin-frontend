import React, { useState, useEffect } from "react";
import "./Feed.css";
import Inputbar from "./Inputbar.js";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setPosts(
          snapshot.docs.map(doc => {
            return {
              id: doc.id,
              data: doc.data()
            };
          })
        );
      });
  }, []);
  return (
    <div className="feed">
      <Inputbar />
      {/* { Posts} */}
      {/* post
         post
         post */}
      {console.log(posts)}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
}

export default Feed;
