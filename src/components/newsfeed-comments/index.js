import "./index.css";

const NewsFeedComment = (props) => {
  return (
    <div className="news-feed-comments">
      <div className="username">{props.username} commented:</div>
      <div className="comment">{props.comment}</div>
    </div>
  );
};

export default NewsFeedComment;
