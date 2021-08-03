import React from "react";

import Button from "../button";

import "./index.css";

const LoginForm = (props) => {
  return (
    <form>
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
            required
          ></input>
        </div>
        <div>
          <input
            className="login-input"
            type="password"
            placeholder="Password*"
            required
          ></input>
        </div>

        <Button name="Log In" type="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
