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

const PROFILE = gql`
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
  }
`;

const BUSINESS_SEARCH = gql`
  query Query(
    $businessSearchBusinessType: String!
    $businessSearchCountry: String
    $businessSearchRegion: String
  ) {
    businessSearch(
      businessType: $businessSearchBusinessType
      country: $businessSearchCountry
      region: $businessSearchRegion
    ) {
      id
      name
      username
      email
      profilePicture
      region
      country
      businessName
      businessType
      ratings
    }
  }
`;

export { DASHBOARD, PROFILE, BUSINESS_SEARCH };
