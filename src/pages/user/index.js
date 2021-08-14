import Avatar from "../../components/avatar";
import Calendly from "../../components/calendly";
import SimpleModal from "../../components/modal";
import NewsFeedCard from "../../components/newsfeed-card";
import ReviewCard from "../../components/review-card";

import "./index.css";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-left-all">
          <h1 className="profile-left">Username/business name</h1>
          <ReviewCard />
          <div className="profile-left">about me!</div>
          <div className="profile-left">Business info</div>
          <SimpleModal name="Followers" />
        </div>
        <div>
          <Avatar URL="https://pbs.twimg.com/profile_images/1290710495465541633/BhrDfujl_400x400.jpg" />
          <SimpleModal name="Contact Me" />
        </div>
        <div>
          <Calendly />
        </div>
      </div>
      <div className="profile-card">
        <NewsFeedCard
          title="Hello"
          body="Welcome to my first post!"
          likes="5"
        />
      </div>
    </>
  );
};

export default UserProfile;
