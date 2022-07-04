import { gql, useQuery } from "@apollo/client";

export const GET_RESTAURANT = gql`
  query GET_RESTAURANT($id: ID!) {
    restaurant(id: $id) {
      data {
        id
        attributes {
          email
          name
          description
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
export const useRestaurant = (id: string) => {
  const { loading, error, data } = useQuery(GET_RESTAURANT, {
    variables: {
      id,
    },
  });
  return { loading, error, data };
};
