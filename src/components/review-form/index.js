import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

import Button from "../button";
import { LEAVE_REVIEW } from "../../mutations";

const ReviewForm = () => {
  // hooks
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  // destructure input from mutation. if error throws new error
  const [createReview] = useMutation(LEAVE_REVIEW, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  // this will be run at the submit of the form
  const onSubmit = async (reviewData) => {
    try {
      console.log(reviewData);
      await createReview({
        variables: {
          createReviewInput: {
            ...reviewData,
            rating: parseInt(reviewData.rating, 10),
            writtenFor: id,
          },
        },
      });
      window.location.replace(`/user-profile/${id}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signup-form">
        <select
          className="signup-input"
          {...register("serviceUsed", { required: true })}
        >
          <option value="Service One">Service One</option>
          <option value="Service Two">Service Two</option>
          <option value="Service Three">Service Three</option>
        </select>
        <select
          className="signup-input"
          {...register("rating", { required: true })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div>
          <textarea
            className="business-input"
            placeholder="Pleas type in your comment!"
            required
            {...register("commentBox", { required: true })}
          ></textarea>
        </div>

        <Button name="Submit" type="submit" />
      </div>
    </form>
  );
};

export default ReviewForm;
