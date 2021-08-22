import NewsFeedComment from "../newsfeed-comments";
import "./index.css";

const NewsFeedCard = ({ title, body, likes, postedBy }) => {
  // destructuring followers array from props

  return (
    <div>
      <div className="news-feed-title">
        <div>{title}</div>
        <div>
          <small>Posted by </small> {postedBy}
        </div>
      </div>
      <div className="news-feed-body">{body}</div>
      <div className="news-feed-like">Likes:{likes}</div>
      {/* <NewsFeedComment username="bobsmith101" comment="This looks great!" /> */}
    </div>
  );
};

export default NewsFeedCard;
