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
        password
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

export { SIGNUP };
