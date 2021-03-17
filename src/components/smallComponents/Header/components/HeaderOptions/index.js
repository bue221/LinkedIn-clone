import React from "react";
import Avatar from "@material-ui/core/Avatar";

import "./style.css";

const HeaderOptions = ({ icon: Icon, title, avatar, name, ...props }) => {
  return (
    <div className="header_options" {...props}>
      {Icon && <Icon className="header_options_icon" />}
      {avatar && (
        <Avatar className="header_options_icon" src={avatar} alt={name} />
      )}
      <p className="title">{title}</p>
    </div>
  );
};

export default HeaderOptions;
