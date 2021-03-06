import { gql, useQuery } from "@apollo/client";

export const GET_RESTAURANTS = gql`
  query {
    restaurants {
      data {
        id
        attributes {
          name
          email
          phone
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const useRestaurants = () => {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  return { loading, error, data };
};
