import { gql } from "@apollo/client";

const DASHBOARD = gql`
  query Query {
    dashboard {
      currentUser {
        id
        name
        username
        type
        email
        profilePicture
        businessType
        businessDescription
        averageRating
      }
      followers {
        id
        username
        name
        profilePicture
        businessType
        businessDescription
        averageRating
      }
      posts {
        _id
        postedBy {
          username
          name
        }
        title
        subtitle
        mainText
        image
        likes {
          name
          username
          email
        }
        url
        createdAt
        comments {
          _id
          commentPostedBy {
            id
            name
            username
            type
          }
          postId
          commentText
          createdAt
        }
      }
    }
  }
`;

const PROFILE = gql`
  query Query($profileUserId: String) {
    profile(userId: $profileUserId) {
      user {
        name
        username
        id
        type
        email
        profilePicture
        region
        country
        businessName
        businessType
        businessDescription
        calendlyUsername
        ratings
        createdAt
        age
        gender
        identifyAs
        pronouns
        posts {
          _id
          title
          subtitle
          mainText
          image
          likes {
            id
            name
            username
          }
          createdAt
        }
      }
      comments {
        _id
        commentPostedBy {
          name
          username
        }
        postId
        commentText
        createdAt
      }
      myFollowers {
        id
        name
        username
        profilePicture
        businessName
        businessType
        ratings
        averageRating
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
      profilePicture
      region
      country
      businessName
      businessType
      businessDescription
      ratings
      averageRating
    }
  }
`;

const GET_CHAT = gql`
  query Query($chatFromUserId: ID!, $chatToUserId: ID) {
    chat(fromUserId: $chatFromUserId, toUserId: $chatToUserId) {
      message
      id

      fromUser {
        id
        username
        type
        profilePicture
        businessName
        pronouns
      }
      toUser {
        id
        username
        type
        profilePicture
        businessName
        pronouns
      }
    }
  }
`;

const GET_REVIEWS = gql`
  query Query($getReviewsUserId: String!) {
    getReviews(userId: $getReviewsUserId) {
      commentBox
      serviceUsed
      rating
      writtenBy
      writtenFor
      createdAt
      username {
        name
        username
        type
      }
    }
  }
`;

export { DASHBOARD, PROFILE, BUSINESS_SEARCH, GET_CHAT, GET_REVIEWS };
