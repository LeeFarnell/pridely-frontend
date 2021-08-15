import { gql } from "@apollo/client";

const DASHBOARD_ME = gql`
  query Query {
    user {
      id
      name
      username
      type
      profilePicture
      createdAt
    }
    allFollowers {
      id
      followerId
      businessId
    }
  }
`;

const DASHBOARD_FOLLOWERS_PROFILE = gql`
  query Query($followerDataFollowerId: String) {
    followerData(followerId: $followerDataFollowerId) {
      id
      name
      username
      email
      profilePicture
      createdAt
    }
  }
`;

//socialMedia
// TODO: Query to get all Followers for current User.
// TODO: Query to get user profile and their posts, based on ID.

export { DASHBOARD_ME, DASHBOARD_FOLLOWERS_PROFILE };
