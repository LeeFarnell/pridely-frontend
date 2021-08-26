import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

import Button from "../button";
import { EDIT_BUSINESS_USER } from "../../mutations";

import "./index.css";

const BusinessForm = (props) => {
  // hooks
  const { register, handleSubmit } = useForm();

  // destructure input from mutation. if error throws new error
  const [editBusinessUser] = useMutation(EDIT_BUSINESS_USER, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  // this will be run at the submit of the form
  const onSubmit = async (formData) => {
    try {
      await editBusinessUser({
        variables: {
          editBusinessUserInput: formData,
        },
      });
      window.location.replace("/dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form">
        <p>
          Thanks for selecting to be a Business User! Please enter the details
          below and we will create your business profile!
          <br />
          (* - Required Field)
        </p>
        <div className="business-type">
          Please select your user type:
          <select
            className="signup-input"
            {...register("businessType", { required: true })}
          >
            <option value="Photo">Photography</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Dance">Dance</option>
          </select>
        </div>
        <div>
          <input
            className="business-input"
            placeholder="Business Name*"
            required
            {...register("businessName", { required: true })}
          ></input>
        </div>
        <div>
          <textarea
            className="business-input"
            placeholder="Enter some information about your business*"
            required
            {...register("businessDescription", { required: true })}
          ></textarea>
        </div>
        <div>
          <input
            className="business-input"
            type="input"
            placeholder="Have a Calendly account? Enter your Calendly username!"
            {...register("calendlyUsername", { required: false })}
          ></input>
        </div>
        <div>
          <input
            className="business-input"
            type="url"
            placeholder="Add any Social Media URL*"
            {...register("socialMedia", { required: false })}
          ></input>
        </div>
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default BusinessForm;
