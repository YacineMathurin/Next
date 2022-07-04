import { ApolloError } from "@apollo/client";

export interface IRestaurantData {
  loading: boolean;
  error: ApolloError | undefined | null;
  data: {
    restaurant: {
      data: {
        id: string;
        attributes: {
          email: string;
          name: string;
          description: string;
          images: {
            data: [
              {
                attributes: {
                  url: string;
                };
              }
            ];
          };
        };
      };
    };
  } | null;
}
