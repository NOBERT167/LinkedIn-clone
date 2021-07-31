import React, { forwardRef } from "react";
import "./Post.styles.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photoURL}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p> {description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" />
        <InputOption Icon={ChatBubbleIcon} title="Comment" />
        <InputOption Icon={ShareIcon} title="Share" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
