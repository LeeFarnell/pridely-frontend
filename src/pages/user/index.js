import Avatar from "../../components/avatar";
import SimpleModal from "../../components/modal";
import NewsFeedCard from "../../components/newsfeed-card";
import ReviewCard from "../../components/review-card";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div>
          <h3>Username/business name</h3>
          <small>hello lee</small>
          <div>Business info</div>
        </div>
        <div>
          <Avatar URL="https://pbs.twimg.com/profile_images/1290710495465541633/BhrDfujl_400x400.jpg" />
          <SimpleModal name="Contact Me" />
        </div>
        <div>
          <div>calender</div>
          <ReviewCard />
          <SimpleModal name="Followers" />
        </div>
      </div>
      <div>
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
