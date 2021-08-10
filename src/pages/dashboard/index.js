import Carousel from "../../components/carousel";
import NewsFeedCard from "../../components/newsfeed-card";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div>
        <h1>Welcome username here!</h1>
      </div>
      <Carousel />
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
