import { useQuery } from "@apollo/client";
import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import { DASHBOARD_ME } from "../../queries";
import "./index.css";

const Dashboard = () => {
  const { data, error, loading } = useQuery(DASHBOARD_ME);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const userData = data.user;
  const userFollowers = data.allFollowers;

  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome {userData.username}</h1>
      </div>
      <Carousel followers={userFollowers} />
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
