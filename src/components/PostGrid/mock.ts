import { Posts } from '../../shared-typed/posts';
import { data } from '../../api/data.json';

export default { posts: data.posts.data } as unknown as Posts;
