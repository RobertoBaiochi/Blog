import { data } from '../../api/data.json';
import { PostProps } from '.';

const { posts } = data;
const {
  id,
  attributes: { title, excerpt, createdAt, content },
} = posts.data[0];

export default {
  id,
  title,
  excerpt,
  cover: data.posts.data[0].attributes.cover.data,
  author: data.posts.data[0].attributes.author.data,
  categories: data.posts.data[0].attributes.categories.data,
  createdAt,
  content,
} as unknown as PostProps;
