import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Button from "../button";
import { CREATE_POST } from "../../mutations";
import { useUserContext } from "../../contexts/UserProvider";

import "./index.css";

const BusinessPost = (props) => {
  const { state } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const history = useHistory();

  const [createNewPost] = useMutation(CREATE_POST, {
    onCompleted: () => {
      history.push(`/user-profile/${state.user.id}`);
    },

    onError: () => {
      throw new Error("something went wrong!");
    },
  });

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
        </div>

        <div>
          <input
            className="post-input"
            placeholder="Post Subtitle"
            {...register("subtitle", { required: true })}
          ></input>
        </div>

        <div>
          <textarea
            className="post-input-text"
            placeholder="Write your post*"
            {...register("mainText", { required: true })}
          ></textarea>
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
