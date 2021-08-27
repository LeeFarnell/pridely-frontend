import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Button from "../button";
import { LOGIN } from "../../mutations";
import { useUserContext } from "../../contexts/UserProvider";
import Auth from "../../utils/auth";

import "./index.css";

const LoginForm = (props) => {
  const { dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const [login] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const payload = {
        token: data.login.token,
        email: data.login.user.email,
        firstName: data.login.user.firstName,
        lastName: data.login.user.lastName,
        id: data.login.user.id,
      };

      localStorage.setItem("user", JSON.stringify(payload));

      dispatch({
        type: "LOGIN",
        payload,
      });

      history.push("/dashboard");

      const { token } = data.login;
      Auth.login(token);
    },
    onerror: (error) => {
      console.error(error.message);
      throw new Error("something went wrong!");
    },
  });

  const onSubmit = async (formData) => {
    try {
      await login({
        variables: {
          loginInput: formData,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="login-form">
        <p>
          Please enter your email address and password to log in.
          <br />
          (* - Required Field)
        </p>

        <div>
          <input
            className="login-input"
            type="email"
            placeholder="Email Address*"
            {...register("email", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            placeholder="Password*"
            {...register("password", { required: true })}
          ></input>
        </div>

        <Button name="Log In" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
