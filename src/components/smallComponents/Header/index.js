import React from "react";
import "./style.css";

import LinkedingIcon from "../../assets/icons/LinkedingIcon";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <LinkedingIcon width="2em" heigth="2em" />
        <div className="header_search">
          <input />
        </div>
      </div>
    </div>
  );
};

export default Header;
