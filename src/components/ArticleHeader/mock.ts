import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';

// const { posts } = data;
// const {
//   id,
//   attributes: { title, excerpt, createdAt },
// } = posts.data[1];

// export default {
//   id,
//   title,
//   excerpt,
//   cover: data.posts.data[1].attributes.cover,
//   author: data.posts.data[1].attributes.author.data,
//   categories: data.posts.data[1].attributes.categories.data,
//   createdAt,
// } as unknown as ArticleHeaderProps;

const {
  id,
  attributes: { title, excerpt, createdAt },
} = data.posts.data[1];

export default {
  id,
  title,
  excerpt,
  cover: data.posts.data[1].attributes.cover,
  author: data.posts.data[1].attributes.author.data,
  categories: data.posts.data[1].attributes.categories.data[1],
  createdAt,
} as unknown as ArticleHeaderProps;
