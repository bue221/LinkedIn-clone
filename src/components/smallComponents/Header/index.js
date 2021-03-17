import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";
import LinkedingIcon from "../../assets/icons/LinkedingIcon";

import Hidden from "@material-ui/core/Hidden";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import HeaderOptions from "./components/HeaderOptions";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "features/user/userSlice";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // console.log(user);
  return (
    <div className="header">
      <div className="header_left">
        <LinkedingIcon width="2em" heigth="2em" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <Hidden mdDown>
        <div className="header_right">
          <HeaderOptions
            title="Home"
            icon={HomeIcon}
            onClick={() => history.push("/home")}
          />
          <HeaderOptions title="My network" icon={SupervisorAccountIcon} />
          <HeaderOptions title="Jobs" icon={WorkIcon} />
          <HeaderOptions title="Messages" icon={ForumIcon} />
          <HeaderOptions title="Notifications" icon={NotificationsActiveIcon} />
          <HeaderOptions
            title="Yo"
            name={user?.displayName}
            avatar={user?.photoUrl || "rere"}
            onClick={() => dispatch(logout())}
          />
        </div>
      </Hidden>
    </div>
  );
};

export default Header;
