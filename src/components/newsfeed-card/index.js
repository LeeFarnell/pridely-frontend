import NewsFeedComment from "../newsfeed-comments";
import PostCard from "../post-card";
import "./index.css";

const NewsFeedCard = (props) => {
  // destructuring followers array from props
  const { followers } = props;

  const postMap = followers.map((i) => {
    return <PostCard key={i} myFollowers={i.businessId} />;
  });

  return <div className="news-feed-card">{postMap}</div>;
};

export default NewsFeedCard;
