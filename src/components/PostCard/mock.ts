import { PostCardProps } from '.';
import { data } from '../../api/data.json';

export default data.posts.data[1] as unknown as PostCardProps;
