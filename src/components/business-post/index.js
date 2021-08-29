import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Button from "../button";
import { CREATE_POST } from "../../mutations";
import { useUserContext } from "../../contexts/UserProvider";
import LoadingSpinner from "../loading";
import ErrorMessage from "../error-message";

import "./index.css";

const BusinessPost = () => {
  // hooks
  const { state } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  // create post mutation
  const [createNewPost, { loading, error }] = useMutation(CREATE_POST, {
    onCompleted: () => {
      history.push(`/user-profile/${state.user.id}`);
    },

    onError: () => {
      throw new Error("something went wrong!");
    },
  });

  // on submit try to execute the mutation, if it fails, throw an error
  const onSubmit = async (formData) => {
    try {
      await createNewPost({
        variables: {
          createNewPostInput: { ...formData, postedBy: state.user.id },
        },
      });
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
    <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="business-post">
        <h2>Create Post</h2>

        <div>
          <input
            className="post-input"
            placeholder="Post Title*"
            {...register("title", { required: true })}
          ></input>
          {errors?.title && (
            <p className="required-field">Post title is reguired</p>
          )}
        </div>

        <div>
          <input
            className="post-input"
            placeholder="Post Subtitle"
            {...register("subtitle", { required: true })}
          ></input>
          {errors?.subtitle && (
            <p className="required-field">Post subtitle is reguired</p>
          )}
        </div>

        <div>
          <textarea
            className="post-input-text"
            placeholder="Write your post*"
            {...register("mainText", { required: true })}
          ></textarea>
          {errors?.mainText && (
            <p className="required-field">You need to type in some text!</p>
          )}
        </div>

        <div>
          <input
            className="post-input"
            type="url"
            placeholder="Add URL here"
            {...register("url", { required: false })}
          ></input>
        </div>

        <Button name="Create Post" type="submit" />
      </div>
    </form>
  );
};

export default BusinessPost;
