import { useQuery } from "@apollo/client";

import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import { useUserContext } from "../../contexts/UserProvider";
import { DASHBOARD } from "../../queries";
import CircularIndeterminate from "../../components/loading";

import "./index.css";

const Dashboard = () => {
  // query data for current user
  const { data, error, loading } = useQuery(DASHBOARD);
  const { state } = useUserContext();

  // if data is loading render this
  if (loading) {
    return (
      <div className="dashboard-container">
        <CircularIndeterminate />
      </div>
    );
  }

  // if theres an error render this
  if (error) {
    return <div>error</div>;
  }

  // current user data
  const userData = data.dashboard;

  // console.log(userData.followers[0].posts[0].likes);

  const followerData = userData.followers;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome {userData.currentUser.username}</h1>
        <img
          src={userData.currentUser.profilePicture}
          alt={userData.currentUser.username}
        />
      </div>
      {followerData.length === 0 ? (
        <h3>
          Uh oh! Looks like you don't follow anyone! Do a search and follow some
          businesses!
        </h3>
      ) : (
        followerData.length && <Carousel followers={followerData} />
      )}

      <div>
        <h3>Recent post from people you follow</h3>
        {followerData.map((follower) => {
          return follower.posts.map((post) => {
            const postTitle = post.title;
            const postBody = post.mainText;
            const postLikes = post.likes;
            const postPostedBy = follower.username;

            console.log(post.likes);

            const isLiked = post.likes.findIndex(
              (like) => like._id === state.user._id
            );

            return (
              <NewsFeedCard
                postId={post._id}
                title={postTitle}
                body={postBody}
                likes={postLikes.length}
                postedBy={postPostedBy}
                isLiked={isLiked}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Dashboard;
