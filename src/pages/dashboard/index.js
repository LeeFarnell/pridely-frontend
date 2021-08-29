import { useQuery } from "@apollo/client";

import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import { useUserContext } from "../../contexts/UserProvider";
import { DASHBOARD } from "../../queries";
import LoadingSpinner from "../../components/loading";
import ErrorMessage from "../../components/error-message";

import "./index.css";

const Dashboard = () => {
  // query data for current user
  const { data, error, loading, refetch } = useQuery(DASHBOARD, {
    fetchPolicy: "no-cache",
  });
  const { state } = useUserContext();

  // if data is loading render this
  if (loading) {
    return <LoadingSpinner />;
  }

  // if theres an error render this
  if (error) {
    return <ErrorMessage returnTo={"/"} />;
  }

  // current user data
  const userData = data.dashboard.currentUser;
  const followersData = data.dashboard.followers;
  const postsData = data.dashboard.posts;

  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome {userData.username}</h1>
      </div>
      {/* if the user follows people, render the careosel with their data, else render a message */}
      {followersData.length ? (
        <Carousel followers={followersData} />
      ) : (
        <div>
          Once you follow a few users you will see a carousel of cards
          containing data, here
        </div>
      )}
      <div>
        <h3>Recent post from people you follow</h3>
        {/* map through array of posts and render a newsfeed card with desired data for every post */}
        {postsData.map((post) => {
          const postTitle = post.title;
          const postBody = post.mainText;
          const postLikes = post.likes.length;
          const postPostedBy = post.postedBy.username;

          const isLikedByUser = post.likes.findIndex(
            (like) => like.email === state.user.email
          );

          return (
            <NewsFeedCard
              key={post._id}
              postId={post._id}
              title={postTitle}
              body={postBody}
              likes={postLikes}
              postedBy={postPostedBy}
              isLiked={isLikedByUser}
              comments={post.comments}
              refetch={refetch}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
