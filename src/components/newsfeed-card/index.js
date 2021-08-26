import { useMutation } from "@apollo/client";

import { useUserContext } from "../../contexts/UserProvider";
import NewsFeedComment from "../newsfeed-comments";
import LikeButton from "../like-button";

import "./index.css";
import { LIKE_POST } from "../../mutations";

const NewsFeedCard = ({ postId, title, body, likes, postedBy, isLiked }) => {
  const [likeAPost] = useMutation(LIKE_POST, {
    onCompleted: () => {},
    onerror: () => {
      throw new Error("something went wrong");
    },
  });

  console.log(isLiked);

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
          {isLiked === -1 && (
            <LikeButton
              name="Like"
              onClick={async () => {
                await likeAPost({
                  variables: {
                    likeAPostPostId: postId,
                  },
                });
              }}
            />
          )}
        </span>
      </div>

      {/* <NewsFeedComment username="bobsmith101" comment="This looks great!" /> */}
    </div>
  );
};

export default NewsFeedCard;
