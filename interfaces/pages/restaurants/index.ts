export interface IRestaurantsData {
  id: string;
  attributes: {
    name: string;
    email: string;
    phone: string;
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
}
