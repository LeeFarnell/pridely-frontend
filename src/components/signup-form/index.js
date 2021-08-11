import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import Button from "../button";
import { SIGNUP } from "../../mutations";
import Auth from "../../utils/auth";

import "./index.css";

const SignUpForm = (props) => {
  // hooks
  let history = useHistory();
  const [currentType, setCurrentType] = useState("standard");
  const [country, selectCountry] = useState("United Kingdom");
  const [region, selectRegion] = useState("West Midlands");
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

  const handleCountryChange = (country) => {
    selectCountry(country);
    console.log(country);
  };

  const handleRegionChange = (region) => {
    selectRegion(region);
    console.log(region);
  };

  const onSubmit = async (formData) => {
    try {
      await signup({
        variables: {
          signupInput: formData,
        },
      });
      console.log(formData);
      console.log("hit");
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
        {/*
        TODO: get the id for the country and city and store in data base.
              get cities and countries from database and populate dropdown with them.
        */}

        <CountryDropdown
          className="signup-input"
          value={country}
          onChange={handleCountryChange}
          // {...register("country", { required: true })}
        />
        <RegionDropdown
          className="signup-input"
          country={country}
          value={region}
          onChange={handleRegionChange}
          // {...register("city", { required: true })}
        />
        <div>
          <input
            className="signup-input"
            type="url"
            placeholder="Profile Picture URL*"
            {...register("profilePicture", { required: true })}
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
