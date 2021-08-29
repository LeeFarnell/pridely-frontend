import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Button from "../button";
import { LOGIN } from "../../mutations";
import { useUserContext } from "../../contexts/UserProvider";
import Auth from "../../utils/auth";
import LoadingSpinner from "../loading";
import ErrorMessage from "../error-message";

import "./index.css";

const LoginForm = (props) => {
  // hooks
  const { dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  // dispatch login mutation
  const [login, { loading, error }] = useMutation(LOGIN, {
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
    // if error, throw an error, display it in the console.log
    onerror: (error) => {
      console.error(error.message);
      throw new Error("something went wrong!");
    },
  });

  // try executing the mutation. if fails, throw error
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

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage returnTo={"/"} />;
  }

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
          {errors?.email && (
            <p className="required-field">This field is required!</p>
          )}
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            placeholder="Password*"
            {...register("password", { required: true })}
          ></input>
          {errors?.password && (
            <p className="required-field">This field is required!</p>
          )}
        </div>

        <Button name="Log In" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
