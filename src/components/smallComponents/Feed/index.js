import React, { useState } from "react";
import { Avatar, Button, Paper, Hidden } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";

import ButtonOptions from "./ButtonOption";

import "./style.css";
import { db } from "../../../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "features/user/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    if (message !== "") {
      db.collection("posts").add({
        name: user?.displayName,
        description: user?.email,
        message,
        photoUrl: user?.photoUrl,
        timesStamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("");
    }
  };
  return (
    <>
      <Paper>
        <div className="container">
          <div className="input_write">
            <Avatar
              src={user?.photoUrl}
              alt={user?.displayName}
              className="Avatar profile"
            />
            <form className="create_post" onSubmit={sendPost}>
              <input
                placeholder="crear publicacion"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Button onClick={sendPost}>Crear</Button>
            </form>
          </div>
          <div>
            <Hidden mdDown>
              <div className="container_buttons">
                <ButtonOptions title="Foto" color="#70b5f9" icon={PhotoIcon} />
                <ButtonOptions
                  title="Video"
                  color="#7fc15e"
                  icon={VideoLibraryIcon}
                />
                <ButtonOptions
                  title="Evento"
                  color="#e7a33e"
                  icon={EventIcon}
                />
                <ButtonOptions
                  title="Escribir articulo"
                  color="#f5987e"
                  icon={DescriptionIcon}
                />
              </div>
            </Hidden>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default Feed;
