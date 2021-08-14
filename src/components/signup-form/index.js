import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { Switch, Redirect, useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { useUserContext } from "../../contexts/UserProvider";
import Button from "../button";
import { SIGNUP } from "../../mutations";
import Auth from "../../utils/auth";

import "./index.css";

const SignUpForm = (props) => {
  // hooks
  let history = useHistory();
  const [currentType, setCurrentType] = useState("standard");
  const [country, setCountry] = useState("United Kingdom");
  const [region, setRegion] = useState("West Midlands");
  const { dispatch } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [signup] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      const payload = {
        token: data.signup.token,
        email: data.signup.user.email,
        firstName: data.signup.user.firstName,
        lastName: data.signup.user.lastName,
        id: data.signup.user.id,
      };

      localStorage.setItem("user", JSON.stringify(payload));

      dispatch({
        type: "LOGIN",
        payload,
      });

      const { token, user } = data.signup;
      Auth.login(token);
    },
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  // function to be run on submission of the form
  const onSubmit = async (formData) => {
    try {
      await signup({
        variables: {
          signupInput: formData,
        },
      });
      //if user type is business, the user will be prompted with a form to add his business details
      if (formData.type === "Business") {
        window.location.replace("/business-signup");
      } else {
        window.location.replace("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
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
          <select
            className="signup-input"
            defaultValue={currentType}
            onChange={setCurrentType}
            {...register("type", { required: true })}
          >
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
        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <CountryDropdown
              className="signup-input"
              value={country}
              onChange={(data) => {
                onChange(data);
                setCountry(data);
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="region"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <RegionDropdown
              className="signup-input"
              country={country}
              value={region}
              onChange={(data) => {
                onChange(data);
                setRegion(data);
              }}
            />
          )}
        />
        <div>
          <input
            className="signup-input"
            type="url"
            placeholder="Profile Picture URL*"
            {...register("profilePicture", { required: false })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            type="number"
            placeholder="Age"
            {...register("age", { required: false, valueAsNumber: true })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Gender"
            {...register("gender", { required: false })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Identify As"
            {...register("identifyAs", { required: false })}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Pronouns"
            {...register("pronouns", { required: false })}
          ></input>
        </div>
        <Button name="Sign Up" type="submit" />
      </div>
    </form>
  );
};

export default SignUpForm;
