import { ArticleMetaProps } from './';
import { data } from '../../api/data.json';

// const { posts } = data;

// const {
//   attributes: { createdAt, author, categories },
// } = posts.data[1];

export default {
  createdAt: data.posts.data[0].attributes.createdAt,
  author: data.posts.data[0].attributes.author.data,
  categories: data.posts.data[0].attributes.categories.data,
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
