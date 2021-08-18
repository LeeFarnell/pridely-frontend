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

const PROFILE = gql `
query Query($profileUserId: String) {
  profile(userId: $profileUserId) {
    user {
      id
      name
      username
      type
      email
      profilePicture
      region
      country
      businessName
      businessType
      businessDescription
      ratings
      createdAt
      age
      gender
      identifyAs
      pronouns
      posts {
        _id
        postedBy
        title
        subtitle
        mainText
        image
        badges
        url
        likes
        createdAt
      }
    }
  }
}`

export { DASHBOARD, PROFILE };
