import React from "react";
import "./style.css";

import Header from "../../smallComponents/Header";

import { Grid, Paper} from "@material-ui/core";

const MinimalLayout = ({ children }) => {
  return (
    <>
      <Header />
    <div className="content-container">
          <Paper className="content" elevation={3}>
              {children}
          </Paper>
    </div>
    </>
  );
};

export default MinimalLayout