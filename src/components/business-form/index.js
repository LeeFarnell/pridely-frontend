import React from "react";

import Button from "../button";

import "./index.css";

const BusinessForm = (props) => {
  return (
    <form>
      <div className="signup-form">
        <p>
          Thanks for selecting to be a Business User! Please enter the details
          below and we will create your business profile!
          <br />
          (* - Required Field)
        </p>
        <div className="business-type">
          Please select your user type:
          <select className="signup-input">
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
          ></input>
        </div>
        <div>
          <textarea
            className="business-input"
            placeholder="Enter some information about your business*"
            required
          ></textarea>
        </div>
        <div>
          <input
            className="business-input"
            type="url"
            placeholder="Add any Social Media URL*"
            required
          ></input>
        </div>
        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default BusinessForm;
