import React, { useState, useEffect } from "react";
import "./Feed.styles.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import TodayIcon from "@material-ui/icons/Today";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Post from "./Post";
import { db } from "./Firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect((posts) => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={PhotoIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={TodayIcon} title="Event" color="#coc8cd" />
          <InputOption
            Icon={AssignmentIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, message, description, photoURL } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            description={description}
            photoURL={photoURL}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
