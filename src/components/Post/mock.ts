import { PostProps } from '.';
import { data } from '../../api/data.json';

const { posts } = data;

const { id, createdAt, attributes } = posts.data[0];

const { author, categories, content, cover, excerpt, slug, title } = attributes;

export default {
  id,
  author,
  categories,
  content,
  cover,
  excerpt,
  slug,
  title,
  createdAt,
} as PostProps;
