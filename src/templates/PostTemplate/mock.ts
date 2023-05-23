import { PostTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting.data.attributes,
  posts: data.posts.data[0],
} as unknown as PostTemplateProps;
