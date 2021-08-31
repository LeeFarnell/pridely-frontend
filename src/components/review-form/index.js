import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";

import { LEAVE_REVIEW } from "../../mutations";
import LoadingSpinner from "../loading";
import ErrorMessage from "../error-message";

import "./index.css";

const ReviewForm = () => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();

  const history = useHistory();

  // destructure input from mutation. if error throws new error
  const [createReview, { loading, error }] = useMutation(LEAVE_REVIEW, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  // this will be run at the submit of the form
  const onSubmit = async (reviewData) => {
    try {
      await createReview({
        variables: {
          createReviewInput: {
            ...reviewData,
            rating: parseInt(reviewData.rating, 10),
            writtenFor: id,
          },
        },
      });
      history.push(`/reviews/${id}`);
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
      <div className="review-form">
        <select
          className="review-input"
          {...register("serviceUsed", { required: true })}
        >
          <option value="Service One">Professionalism</option>
          <option value="Service Two">Quality of Service</option>
          <option value="Service Three">Punctuality</option>
        </select>
        {errors?.serviceUsed && (
          <p className="required-field">This field is required!</p>
        )}
        <select
          className="review-input"
          {...register("rating", { required: true })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors?.rating && (
          <p className="required-field">This field is required!</p>
        )}
        <div>
          <textarea
            className="review-input"
            placeholder="Please type in your comment!"
            {...register("commentBox", { required: true })}
          ></textarea>
          {errors?.commentBox && (
            <p className="required-field">This field is required!</p>
          )}
        </div>
        <button className="modal-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
