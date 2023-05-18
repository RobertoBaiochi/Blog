import { data } from '../../api/data.json';
import { PostProps } from '.';

const { posts } = data;
const {
  id,
  attributes: { title, excerpt, cover, author, categories, createdAt, content },
} = posts.data[0];

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
} as unknown as PostProps;
