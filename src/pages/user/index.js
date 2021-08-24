import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import Avatar from "../../components/avatar";
import Calendly from "../../components/calendly";
import SimpleModal from "../../components/modal";
import { PROFILE } from "../../queries";
import { useUserContext } from "../../contexts/UserProvider";
import Button from "../../components/button";
import NewsFeedCard from "../../components/newsfeed-card";
import { average } from "../../utils/utilities";

import "./index.css";

const UserProfile = () => {
  const { id } = useParams();
  const { state } = useUserContext();

  // query data for current user
  const { data, error, loading } = useQuery(PROFILE, {
    variables: { profileUserId: id },
  });

  // if data is loading render this
  if (loading) {
    return <div>loading</div>;
  }

  // if theres an error render this
  if (error) {
    return <div>error</div>;
  }

  // current user data
  const userData = data.profile.user;
  console.log(data.profile.myFollowers);

  const averageRating = average(
    userData.ratings,
    userData.ratings.length
  ).toFixed(1);

  return (
    <>
      <div className="profile-container">
        <div className="profile-left-all">
          <h1 className="profile-left">{userData.name}</h1>
          <div className="review-card-container">
            <div className="review-card-rating">
              <h3>Rating:{averageRating}/5</h3>
              <div>
                <ReactStars
                  count={5}
                  edit={false}
                  value={parseInt(averageRating, 8)}
                  size={25}
                  activeColor="#f2b5d4"
                  isHalf={true}
                />
              </div>
            </div>
          </div>
          <div className="profile-left">{userData.pronouns}</div>
          <div className="profile-left">Business info</div>
          <SimpleModal
            name="Followers"
            followersData={data.profile.myFollowers}
          />
          {state.user.id !== userData.id && (
            <Link to={`/chat/${userData.id}`}>
              <Button name="Chat" />
            </Link>
          )}
          {state.user.id !== userData.id && (
            <Link to={`/reviews/${userData.id}`}>
              <Button name="View Reviews" />
            </Link>
          )}

          {state.user.id !== userData.id && <SimpleModal name="Leave Review" />}

          {state.user.id === userData.id && (
            <Link to={`/create-post/${state.user.id}`}>
              <Button name="Create Post!" />
            </Link>
          )}
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
        {/* <NewsFeedCard
          title="Hello"
          body="Welcome to my first post!"
          likes="5"
        /> */}
        {userData.posts.map((post) => {
          const isLiked = post.likes.findIndex(
            (like) => like._id === state.user._id
          );
          return (
            <NewsFeedCard
              postId={post._id}
              title={post.title}
              body={post.mainText}
              likes={post.likes.length}
              postedBy={userData.username}
              isLiked={isLiked}
              key={post._id}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserProfile;
