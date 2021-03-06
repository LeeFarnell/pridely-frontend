import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import { useUserContext } from "../../contexts/UserProvider";
import Button from "../button";
import { SIGNUP } from "../../mutations";
import Auth from "../../utils/auth";
import ImageUpload from "../image-upload";
import ErrorMessage from "../error-message";
import LoadingSpinner from "../loading";

import "./index.css";

const SignUpForm = (props) => {
  // hooks
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const { dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm();

  const [signup, { loading, error }] = useMutation(SIGNUP, {
    // execute this block when the mutation is completed
    onCompleted: (data) => {
      const payload = {
        token: data.signup.token,
        email: data.signup.user.email,
        firstName: data.signup.user.firstName,
        lastName: data.signup.user.lastName,
        id: data.signup.user.id,
      };

      // store the user with data in the local storage
      localStorage.setItem("user", JSON.stringify(payload));

      // perform the login
      dispatch({
        type: "LOGIN",
        payload,
      });
      const { token } = data.signup;
      Auth.login(token);

      //if user type is business, the user will be prompted with a form to add his business details
      if (data.signup.user.type === "Business") {
        window.location.replace("/business-signup");
      } else {
        window.location.replace("/dashboard");
      }
    },
    // if there is an error, display an error message in the console
    onError: () => {
      throw new Error("something went wrong!", error);
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage returnTo={"/"} />;
  }

  // function to be run on submission of the form
  const onSubmit = async ({ confirmPassword, ...rest }) => {
    try {
      // if the country is missing add an error
      if (!country) {
        setError("country", {
          type: "manual",
          message: "Please select a country",
        });
        // if the image url is missing add an error
      } else if (!imageUrl) {
        setError("profilePicture", {
          type: "manual",
          message: "Please upload a profile picture",
        });
      } else {
        // try to perform the signup mutation
        try {
          await signup({
            variables: {
              signupInput: { ...rest, profilePicture: imageUrl },
            },
          });
        } catch (error) {
          console.error(error.message);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form">
        <h1>Thanks for choosing to sign up! </h1>
        <h3>
          Please enter the details below and we will create your profile!{" "}
        </h3>
        (* - Required Field)
        <div className="user-type">
          Please select your user type:
          <select
            className="signup-input"
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
          {errors?.name && <p className="required-field">Name is Required!</p>}
        </div>
        <div>
          <input
            className="signup-input"
            placeholder="Username*"
            {...register("username", { required: true })}
          ></input>
          {errors?.username && (
            <p className="required-field">Username is Required!</p>
          )}
        </div>
        <div>
          <input
            className="signup-input"
            type="email"
            placeholder="Email Address*"
            {...register("email", { required: true })}
          ></input>
          {errors?.email && (
            <p className="required-field">Email is Required!</p>
          )}
        </div>
        <div>
          <input
            className="signup-input"
            type="password"
            placeholder="Password*"
            {...register("password", { required: true })}
          ></input>
          {errors?.password && (
            <p className="required-field">Password is Required!</p>
          )}
        </div>
        <div>
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm Password*"
            {...register("confirmPassword", { required: true })}
          ></input>
          {errors?.confirmPassword && (
            <p className="required-field">Please confirm your Password!</p>
          )}
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
        {errors?.country && (
          <p className="required-field">Country is Required!</p>
        )}
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
        {errors?.region && (
          <p className="required-field">Region is Required!</p>
        )}
        <div>
          <input
            className="signup-input"
            type="number"
            placeholder="Age"
            {...register("age", { required: false, valueAsNumber: true })}
          ></input>
        </div>
        <div>
          <select
            placeholder="Gender"
            className="signup-input"
            // defaultValue={genderChoice}
            // onChange={setGenderChoice}
            {...register("gender", { required: false })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
            <option value="Genderqueer">Genderqueer</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Omigender">Omigender</option>
            <option value="Agender">Agender</option>
          </select>
        </div>
        <div>
          <select
            placeholder="Identify As"
            className="signup-input"
            // defaultValue={identifyAs}
            // onChange={setIdentifyAs}
            {...register("identifyAs", { required: false })}
          >
            <option value="Lesbian">Lesbian</option>
            <option value="Gay">Gay</option>
            <option value="Bisexual">Bisexual</option>
            <option value="Trans">Trans</option>
            <option value="Queer">Queer</option>
            <option value="Intersex">Intersex</option>
            <option value="Asexual">Asexual</option>
            <option value="Pansexual">Pansexual</option>
            <option value="Straight">Straight</option>
          </select>
        </div>
        <div>
          <select
            placeholder="Pronouns"
            className="signup-input"
            // defaultValue={pronounChoice}
            // onChange={setPronounChoice}
            {...register("pronouns", { required: false })}
          >
            <option value="He/Him">He/Him</option>
            <option value="She/Her">She/Her</option>
            <option value="They/Them">They/Them</option>
            <option value="Xe/Xim">Xe/Xim</option>
            <option value="Zi/Zir">Zi/Zir</option>
          </select>
        </div>
        <div>
          <ImageUpload
            images={images}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setImages={setImages}
          />
          {errors?.profilePicture && (
            <p className="required-field">Profile Picture is Required!</p>
          )}
        </div>
        <Button name="Sign Up" type="submit" />
      </div>
    </form>
  );
};

export default SignUpForm;
