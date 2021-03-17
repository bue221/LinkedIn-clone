import React from "react";
import "./style.css";
import { Redirect } from "react-router-dom";

import SideBar from "../../smallComponents/Sidebar";
import Header from "../../smallComponents/Header";
import Feed from "../../smallComponents/Feed";
import Widgets from "../../smallComponents/Widgets";

import { Grid, Paper, Hidden } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "features/user/userSlice";

const MainLayout = ({ children }) => {
  const user = useSelector(selectUser);
  return (
    <>
      {user === null ? (
        <Redirect to="/login" />
      ) : (
        <>
          <Header />
          <Grid container spacing={3} className="app-body">
            <Grid item md={3} xs={12}>
              <SideBar />
            </Grid>

            <Grid item md={6} xs={12}>
              <Feed />
              {children}
            </Grid>
            <Grid item md={3} xs={12}>
              <Widgets />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default MainLayout;
