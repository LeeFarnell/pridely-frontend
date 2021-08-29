import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { LIKE_POST, CREATE_COMMENT } from "../../mutations";
import LikeButton from "../like-button";
import Button from "../button";
import SimpleAccordion from "../comments-accordion";

import "./index.css";

const NewsFeedCard = ({
  postId,
  title,
  body,
  likes,
  postedBy,
  isLiked,
  comments,
  refetch,
}) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { register, handleSubmit } = useForm();

  // mutation to create a comment
  const [createComment] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      refetch();
    },
    onerror: () => {
      throw new Error("something went wrong!");
    },
  });

  // mutation to like a post
  const [likeAPost] = useMutation(LIKE_POST, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong");
    },
  });

  // this will be run on submission of the form
  const onSubmit = async (commentData) => {
    try {
      await createComment({
        variables: {
          createCommentInput: {
            commentText: commentData.commentText,
            postId,
          },
        },
      });
      setShowCommentInput(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="news-feed-card">
      <div className="news-feed-title">
        <div className="post-title">{title}</div>
        <div className="posted-by">
          <small>Posted by </small> {postedBy}
        </div>
      </div>
      <div className="news-feed-body">{body}</div>
      <div className="news-feed-like">
        Likes: {likes}
        <span>
          {isLiked === -1 ? (
            <LikeButton
              name="Like"
              onClick={async () => {
                try {
                  await likeAPost({
                    variables: {
                      likeAPostPostId: postId,
                    },
                  });
                } catch (error) {
                  console.error(error.message);
                }
              }}
            />
          ) : (
            <div>Liked!</div>
          )}
        </span>
      </div>

      <div>
        <SimpleAccordion comments={comments} postId={postId} />
      </div>

      {!showCommentInput && (
        <div className="add-comment-btn">
          <Button
            name="Add comment"
            onClick={() => {
              setShowCommentInput(true);
            }}
          />
        </div>
      )}
      <div>
        {showCommentInput && (
          <form onSubmit={handleSubmit(onSubmit)} className="add-comment-field">
            <textarea
              className="comment-input"
              placeholder="Type your comment"
              {...register("commentText", { required: true })}
            ></textarea>
            <Button name="Submit" className="add-comment-button" />
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsFeedCard;
