import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";

import { Button, FormHelperText, TextField } from "@material-ui/core";

import MinimalLayout from "../../layouts/MinimalLayout";
import LinkedingIcon from "../../assets/icons/LinkedingIcon";

import "./style.css";

import { auth } from "../../../firebase/";
import { useDispatch } from "react-redux";
import { login } from "features/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      photoUrl: "",
      name: "",
    },
    onSubmit: (values, { setErrors }) => {
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((user) =>
          user.user
            .updateProfile({
              displayName: values.name,
              photoURL: values.photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: user.user.email,
                  uid: user.user.uid,
                  displayName: values.name,
                  photoUrl: values.photoUrl,
                })
              );
              history.push("/Home");
            })
        )
        .catch((err) => {
          setErrors({
            email: err.message.includes("email") && err.message,
            password: err.message.includes("password") && err.message,
            photoUrl: err.message.includes("photoURL") && err.message,
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
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="photoUrl"
            name="photoUrl"
            label="photoUrl"
            type="text"
            value={formik.values.photoUrl}
            onChange={formik.handleChange}
            error={formik.touched.photoUrl && Boolean(formik.errors.photoUrl)}
            helperText={formik.touched.photoUrl && formik.errors.photoUrl}
          />
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
            Registrarse
          </Button>
        </div>
        <Link to="/login" className="Link-login">
          Ya eres miembro <strong>Inicia sesion</strong>
        </Link>
      </form>
    </MinimalLayout>
  );
};

export default LoginPage;
