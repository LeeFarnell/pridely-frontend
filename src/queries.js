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
  }
`;
//socialMedia
// TODO: Query to get all Followers for current User.
// TODO: Query to get user profile and their posts, based on ID.

export { DASHBOARD_ME };
