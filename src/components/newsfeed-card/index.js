import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { LIKE_POST, CREATE_COMMENT } from "../../mutations";
import NewsFeedComment from "../newsfeed-comments";
import LikeButton from "../like-button";
import Button from "../button";

import "./index.css";

const NewsFeedCard = ({
  postId,
  title,
  body,
  likes,
  postedBy,
  isLiked,
  comments,
}) => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { register, handleSubmit } = useForm();

  // mutation to create a comment
  const [createComment] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {},
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
        <div>{title}</div>
        <div>
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
        {" "}
        {/* if there are comments for post display them, else display a message */}
        {comments ? (
          comments.map((comment) => {
            if (comment.postId === postId) {
              return (
                <NewsFeedComment
                  username={comment.commentPostedBy.username}
                  comment={comment.commentText}
                />
              );
            }
          })
        ) : (
          <div>No comments to display</div>
        )}
      </div>
      {/* <CommentButton name="Add a Comment" /> */}
      {!showCommentInput && (
        <Button
          name="Add comment"
          onClick={() => {
            setShowCommentInput(true);
          }}
        />
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
