import NewsFeedComment from "../newsfeed-comments";
import "./index.css";

const NewsFeedCard = (props) => {
  return (
    <div className="news-feed-card">
      <div className="news-feed-title">{props.title}</div>
      <div className="news-feed-body">{props.body}</div>
      <div className="news-feed-like">Likes: {props.likes}</div>
      <NewsFeedComment username="bobsmith101" comment="This looks great!" />
    </div>
  );
};

export default NewsFeedCard;
