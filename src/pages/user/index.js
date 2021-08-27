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

  // current user and comments data
  const userData = data.profile.user;
  const commentsData = data.profile.comments;

  return (
    <>
      <div className="profile-container">
        <div className="profile-left-all">
          <h1 className="profile-left">
            {userData.name} - {userData.pronouns}
          </h1>

          <div className="profile-left">
            <Avatar
              URL={userData.profilePicture}
              alt={`avatar image of ${userData.username}`}
            />
            <div className="profile-review">
              {/* render the chat button only if you're viewing other users profile */}
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
        {/* only render this section if user type is Business */}
        {userData.type === "Business" ? (
          <div className="profile-middle">
            <h1>{userData.businessName}</h1>
            <div className="profile-left">{userData.businessDescription}</div>
            <div className="review-card-container">
              <div className="review-card-rating">
                <h3>Rating:{5}/5</h3>
                <div>
                  <ReactStars
                    count={5}
                    edit={false}
                    value={5}
                    size={25}
                    activeColor="#f2b5d4"
                    isHalf={true}
                  />
                </div>
              </div>
            </div>
            <div className="profile-review">
              <Link to={`/reviews/${userData.id}`}>
                <Button name="View Reviews" />
              </Link>

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
          // if the user type is Standard, render this
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
        {/* if user type is Business, render a custom calendly link (if user has a Calendly account)  */}
        {userData.type === "Business" ? (
          <div className="profile-calendly">
            <Calendly calendly={userData.calendlyUsername} />
          </div>
        ) : (
          <></>
        )}
      </div>
      {userData.posts.length > 0 ? (
        <div className="profile-post">
          {/* check if user has already liked the post. if he did, the like button will not appear */}
          {userData.posts.map((post) => {
            const isLiked = post.likes.findIndex(
              (like) => like.id === state.user.id
            );

            return (
              <NewsFeedCard
                key={post._id}
                postId={post._id}
                title={post.title}
                body={post.mainText}
                likes={post.likes.length}
                postedBy={userData.username}
                isLiked={isLiked}
                comments={commentsData}
              />
            );
          })}
        </div>
      ) : (
        <h1>Create a Post!</h1>
      )}
    </>
  );
};

export default UserProfile;
