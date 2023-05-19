import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';

const { posts } = data;
const {
  id,
  attributes: { title, excerpt, cover, author, categories, createdAt },
} = posts.data[1];

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
} as unknown as ArticleHeaderProps;
