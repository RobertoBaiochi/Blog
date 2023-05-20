import { Posts } from '../../shared-typed/posts';
import { data } from '../../api/data.json';

const { posts } = data;

export default posts as unknown as Posts;
