import { useQuery } from "@apollo/client";
import { useUserContext } from "../../contexts/UserProvider";

import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import { DASHBOARD } from "../../queries";

import "./index.css";

const Dashboard = () => {
  // query data for current user
  const { data, error, loading } = useQuery(DASHBOARD);
  const { state } = useUserContext();

  // if data is loading render this
  if (loading) {
    return <div>loading</div>;
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
      <div>
        <h1>Welcome {userData.currentUser.username}</h1>
      </div>
      {followerData.length && <Carousel followers={followerData} />}
      <div>
        <h3>Recent post from people you follow</h3>
        {followerData.map((follower) => {
          return follower.posts.map((post) => {
            const postTitle = post.title;
            const postBody = post.mainText;
            const postLikes = post.likes.length;
            const postPostedBy = follower.username;
            const isLiked = post.likes.includes(state.user.id);

            console.log(isLiked);

            return (
              <NewsFeedCard
                title={postTitle}
                body={postBody}
                likes={postLikes}
                postedBy={postPostedBy}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default Dashboard;
