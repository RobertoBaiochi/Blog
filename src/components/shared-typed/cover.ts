export type StrapiImage = {
  cover: {
    data: [
      {
        id: string;
        attributes: {
          alternativeText: string;
          url: string;
          createdAt: string;
        };
      },
    ];
  };
};
