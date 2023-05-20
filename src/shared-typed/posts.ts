import { StrapiImage } from './cover';

export type Posts = {
  data: [
    {
      id: number;
      attributes: {
        title: string;
        cover: StrapiImage;
        excerpt: string;
        slug: string;
      };
    },
  ];
};
