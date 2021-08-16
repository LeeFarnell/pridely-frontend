import { useQuery } from "@apollo/client";
import { USER_POSTS } from "../../queries";
import NewsFeedComment from "../newsfeed-comments";

import "./index.css";

const PostCard = (props) => {
  // destructure follower id from props
  const { myFollowers } = props;

  const { data, error, loading } = useQuery(USER_POSTS, {
    variables: { allPostsUserId: myFollowers },
  });

  // if loading render this
  if (loading) {
    return <div>loading</div>;
  }

  // if error render this
  if (error) {
    return <div>error</div>;
  }
  const post = data.allPosts.map((i) => {
    return (
      <div>
        <div className="news-feed-title">{i.title}</div>
        <div className="news-feed-body">{i.mainText}</div>
        <div className="news-feed-like">Likes:{i.likes.length}</div>
        {/* <NewsFeedComment username="bobsmith101" comment="This looks great!" /> */}
      </div>
    );
  });
  return <div>{post}</div>;
};

export default PostCard;
