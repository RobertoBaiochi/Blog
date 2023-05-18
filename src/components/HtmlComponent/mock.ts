import { Content } from '../../shared-typed/content';
import { data } from '../../api/data.json';

const { posts } = data;

const {
  attributes: { content },
} = posts.data[0];

export default content as unknown as Content;
