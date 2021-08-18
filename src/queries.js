import { gql } from "@apollo/client";

const DASHBOARD = gql`
  query Query {
    dashboard {
      currentUser {
        id
        username
        profilePicture
      }
      followers {
        id
        username
        posts {
          postedBy
          title
          subtitle
          mainText
          image
          badges
          url
          likes
          createdAt
          _id
        }
        profilePicture
        businessType
        ratings
      }
    }
  }
`;

export { DASHBOARD };
