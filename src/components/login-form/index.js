import React from "react";
import { useForm } from "react-hook-form";

import Button from "../button";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../../mutations";

import "./index.css";

const LoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted: () => {
      console.log(data);
    },
    onError: () => {
      console.log("error");
    },
  });

  const onSubmit = async (formData) => {
    await login({
      variables: {
        loginInput: formData,
      },
    });
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
