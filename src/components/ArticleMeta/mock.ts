import { ArticleMetaProps } from './';
import { data } from '../../api/data.json';

const { posts } = data;

const {
  attributes: {
    createdAt,
    author: {
      data: {
        id: idAuthor,
        attributes: { displayName: displayNameAuthor, slug: slugAuthor },
      },
    },
    categories,
  },
} = posts.data[1];

export default {
  createdAt,
  author: {
    idAuthor,
    displayNameAuthor,
    slugAuthor,
  },
  categories,
} as unknown as ArticleMetaProps;

// import { ArticleMetaProps } from '.';

// export default {
//   createdAt: '2023-05-09T04:49:38.694Z',
//   author: {
//     id: '1',
//     displayName: 'Roberto Baiochi',
//     slug: 'roberto-baiochi',
//   },
//   categories: [
//     {
//       id: '1',
//       displayName: 'ReactJs',
//       slug: 'react-js',
//     },
//     {
//       id: '2',
//       displayName: 'NextJs',
//       slug: 'next-js',
//     },
//   ],
// } as ArticleMetaProps;
