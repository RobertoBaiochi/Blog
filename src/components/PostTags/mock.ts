import { PostTagsProps } from '.';
import { data } from '../../api/data.json';

export default {
  tags: data.posts.data[0].attributes.tags.data,
} as unknown as PostTagsProps;

// export default { tags: data.posts.data[0] } as unknown as PostTagsProps;
