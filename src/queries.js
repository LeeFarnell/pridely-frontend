import { gql } from "@apollo/client";

const ME = gql`
  query Query {
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
`;
//socialMedia
export { ME };
