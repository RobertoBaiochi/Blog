import { PostsTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting.data.attributes,
  posts: data.posts.data,
} as unknown as PostsTemplateProps;
