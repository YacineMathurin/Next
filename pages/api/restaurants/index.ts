import { gql } from "@apollo/client";

export const GET_RESTAURANTS = gql`
  query {
    restaurants {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;