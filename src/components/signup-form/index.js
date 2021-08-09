import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Button from "../button";
import { SIGNUP } from "../../mutations";
import Auth from "../../utils/auth";

import "./index.css";

const SignUpForm = (props) => {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signup, { data, loading, error }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push("/login");
    },
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  const onSubmit = async (formData) => {
    try {
      console.log(formData);
      await signup({
        variables: {
          signupInput: formData,
          // TODO: parse value coming from age field, add code to get the "type" field value
          // works with hardcoded data
          // {
          //   signupInput: {
          //     name: "Alice Greene",
          //     username: "agreene",
          //     type: "standard",
          //     email: "test.tewst@email.com",
          //     password: "p123",
          //   },
          // },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form">
        <p>
          Thanks for choosing to sign up! Please enter the details below and we
          will create your profile!
          <br />
          (* - Required Field)
        </p>
        <div className="user-type">
          Please select your user type:
          <select className="signup-input">
            <option value="Standard">Standard</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Full Name*"
            {...register("name", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Username*"
            {...register("username", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="email"
            placeholder="Email Address*"
            {...register("email", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="password"
            placeholder="Password*"
            {...register("password", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Country*"
            {...register("country", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="City*"
            {...register("city", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="url"
            placeholder="Profile Picture URL*"
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="number"
            placeholder="Age"
            {...register("age", { required: false })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Gender"
            {...register("gender", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Identify As"
            {...register("identifyAs", { required: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Pronouns"
            {...register("pronouns", { required: true })}
          ></input>
        </div>
        <Button name="Sign Up" type="submit" />
      </div>
    </form>
  );
};

export default SignUpForm;
