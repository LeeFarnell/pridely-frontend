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
        city
        country
        businessName
        businessType
        businessDescription
        rating
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
        city
        country
        businessName
        businessType
        businessDescription
        rating
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

export { SIGNUP, LOGIN };
