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
import CircularIndeterminate from "../../components/loading";

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
  const userData = data.profile.user;
  console.log(data.profile.myFollowers);
  console.log(userData);

  const averageRating = average(
    userData.ratings,
    userData.ratings.length
  ).toFixed(1);

  return (
    <>
      <div className="profile-container">
        <div className="profile-left-all">
          <h1 className="profile-left">
            {userData.name} - {userData.pronouns}
          </h1>

          <div className="profile-left">
            <Avatar URL={userData.profilePicture} />
            <div className="profile-review">
              {state.user.id !== userData.id && (
                <Link to={`/chat/${userData.id}`}>
                  <Button name="Chat" />
                </Link>
              )}
              <SimpleModal
                name="Followers"
                followersData={data.profile.myFollowers}
              />
            </div>
          </div>
        </div>
        {userData.type === "Business" ? (
          <div className="profile-middle">
            <h1>{userData.businessName}</h1>
            <div className="profile-left">{userData.businessDescription}</div>
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
            <div className="profile-review">
              {state.user.id !== userData.id && (
                <Link to={`/reviews/${userData.id}`}>
                  <Button name="View Reviews" />
                </Link>
              )}

              {state.user.id !== userData.id && (
                <SimpleModal name="Leave Review" />
              )}
              {state.user.id === userData.id && (
                <Link to={`/create-post/${state.user.id}`}>
                  <Button name="Create Post!" />
                </Link>
              )}
            </div>
          </div>
        ) : (
          <div className="profile-middle">
            <h1> About Me!</h1>
            <div className="profile-middle-standard">
              Location: {userData.region}, {userData.country}
            </div>
            <div className="profile-middle-standard">
              Gender: {userData.gender}
            </div>
            <div className="profile-middle-standard">
              How I Identify: {userData.identifyAs}
            </div>
            {state.user.id === userData.id && (
              <Link to={`/create-post/${state.user.id}`}>
                <Button name="Create Post!" />
              </Link>
            )}
          </div>
        )}
        {userData.type === "Business" ? (
          <div className="profile-calendly">
            <Calendly />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="profile-post">
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
