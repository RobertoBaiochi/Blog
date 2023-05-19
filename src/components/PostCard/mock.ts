import { PostCardProps } from '.';
import { data } from '../../api/data.json';

const { posts } = data;
const {
  id,
  attributes: { title, excerpt, cover, slug },
} = posts.data[0];

export default {
  id,
  title,
  slug,
  excerpt,
  cover,
} as unknown as PostCardProps;
