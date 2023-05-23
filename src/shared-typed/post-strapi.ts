import { PostProps } from '../components/Post';
import { TagsStrapi } from './tags';

export type PostStrapi = PostProps &
  TagsStrapi & {
    slug: string;
  };
