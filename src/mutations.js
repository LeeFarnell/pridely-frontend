import { gql } from "@apollo/client";

const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput) {
    signup(input: $signupInput) {
      token
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
      }
    }
  }
`;

const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput) {
    login(input: $loginInput) {
      token
      user {
        id
        name
        username
        type
        email
        region
        country
        businessName
        businessType
        businessDescription
        ratings
        createdAt
        age
        identifyAs
        gender
        pronouns
      }
    }
  }
`;

const EDIT_BUSINESS_USER = gql`
  mutation Mutation($editBusinessUserInput: editBusinessUserInput) {
    editBusinessUser(input: $editBusinessUserInput) {
      user {
        id
        username
        businessName
        createdAt
        pronouns
      }
    }
  }
`;

const SEND_MESSAGE = gql`
  mutation Mutation(
    $createMessageFromUser: ID!
    $createMessageToUser: ID!
    $createMessageMessage: String!
  ) {
    createMessage(
      fromUser: $createMessageFromUser
      toUser: $createMessageToUser
      message: $createMessageMessage
    ) {
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

const CREATE_POST = gql`
  mutation Mutation($createNewPostInput: CreatePostInput) {
    createNewPost(input: $createNewPostInput) {
      postedBy
      title
      subtitle
      mainText
      image
      url
    }
  }
`;

const LEAVE_REVIEW = gql`
  mutation Mutation($createReviewInput: CreateReviewInput) {
    createReview(input: $createReviewInput) {
      commentBox
      serviceUsed
      rating
      writtenBy
      writtenFor
      createdAt
    }
  }
`;

export {
  SIGNUP,
  LOGIN,
  EDIT_BUSINESS_USER,
  SEND_MESSAGE,
  CREATE_POST,
  LEAVE_REVIEW,
};
