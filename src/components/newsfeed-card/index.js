import NewsFeedComment from "../newsfeed-comments";
import "./index.css";

const NewsFeedCard = (props) => {
  // destructuring followers array from props
  const { followers } = props;

  const followMap = followers.map((follower) => {
    const { posts } = follower;

    const postsMap = posts.map((post) => {
      return (
        <div key={post.id}>
          <div className="news-feed-title">{post.title}</div>
          <div className="news-feed-body">{post.mainText}</div>
          <div className="news-feed-like">Likes:{post.likes}</div>
          {/* <NewsFeedComment username="bobsmith101" comment="This looks great!" /> */}
        </div>
      );
    });
    return postsMap;
  });

  return <div className="news-feed-card">{followMap}</div>;
};

export default NewsFeedCard;
