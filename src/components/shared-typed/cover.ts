export type CoverProps = {
  cover: {
    data: [
      {
        id: number;
        attributes: {
          alternativeText: string;
          url: string;
          createdAt: string;
        };
      },
    ];
  };
};
