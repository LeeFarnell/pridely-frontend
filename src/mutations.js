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

export { SIGNUP, LOGIN, EDIT_BUSINESS_USER };
