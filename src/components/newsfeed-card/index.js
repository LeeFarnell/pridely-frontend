import { useMutation } from "@apollo/client";

import NewsFeedComment from "../newsfeed-comments";
import LikeButton from "../like-button";

import "./index.css";
import { LIKE_POST } from "../../mutations";

const NewsFeedCard = ({
  postId,
  title,
  body,
  likes,
  postedBy,
  isLiked,
  comments,
}) => {
  const [likeAPost] = useMutation(LIKE_POST, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong");
    },
  });

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
  );
};

export default NewsFeedCard;
