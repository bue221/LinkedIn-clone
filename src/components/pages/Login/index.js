import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { Button, TextField } from "@material-ui/core";

import MinimalLayout from "../../layouts/MinimalLayout";
import LinkedingIcon from "../../assets/icons/LinkedingIcon";

import "./style.css";
import { auth } from "../../../firebase";
import { useDispatch } from "react-redux";
import { login } from "features/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setErrors }) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          console.log(user);
          dispatch(
            login({
              email: user.user.email,
              uid: user.user.uid,
              displayName: user.user.displayName || "",
              photoUrl: user.user.photoURL || "",
            })
          );
          history.push("/home");
        })
        .catch((err) => {
          setErrors({
            email: err.message,
            password: err.message,
          });
        });
    },
  });
  return (
    <MinimalLayout>
      <form onSubmit={formik.handleSubmit} className="form-login">
        <h1 className="title-login">
          LINKED
          <LinkedingIcon width="1.3em" height="1.3em" />
        </h1>
        <div className="input-container">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Iniciar sesión
          </Button>
        </div>
        <Link to="/register" className="Login-Register">
          Aun no eres miembro <strong>Registrate</strong>
        </Link>
      </form>
    </MinimalLayout>
  );
};

export default LoginPage;
