import React from "react";
import "./style.css";

import { Avatar } from "@material-ui/core";
import ButtonOptions from "../Feed/ButtonOption";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import ChatIcon from "@material-ui/icons/Chat";
import SendIcon from "@material-ui/icons/Send";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar alt={name} src={photoUrl} />
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_btns">
        <ButtonOptions icon={FavoriteBorderIcon} title="Like" />
        <ButtonOptions icon={ChatIcon} title="Comment" />
        <ButtonOptions icon={ShareIcon} title="Share" />
        <ButtonOptions icon={SendIcon} title="Send" />
      </div>
    </div>
  );
};

export default Post;
