import { useQuery } from "@apollo/client";
import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import { DASHBOARD_ME } from "../../queries";
import "./index.css";

const Dashboard = () => {
  // query data for current user
  const { data, error, loading } = useQuery(DASHBOARD_ME);

  // if data is loading render this
  if (loading) {
    return <div>loading</div>;
  }

  // if theres an error render this
  if (error) {
    return <div>error</div>;
  }

  // current user data
  const userData = data.user;

  // current user followers
  const followerData = data.allFollowers;

  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome {userData.username}</h1>
      </div>
      <Carousel followers={followerData} />
      <div>
        <h3>Recent post from people you follow</h3>
        <NewsFeedCard
          title="Hello"
          body="Welcome to my first post!"
          likes="5"
        />
      </div>
    </div>
  );
};

export default Dashboard;
