import { Posts } from '../../shared-typed/posts';
import PostCard from '../PostCard';
import { Wrapper } from './styles';

const PostGrid = ({ data }: Posts) => {
  return (
    <Wrapper>
      {data.map((post) => {
        const {
          id,
          attributes: { title, cover, excerpt, slug },
        } = post;

        return (
          <PostCard
            key={`${slug}+${id}`}
            id={id}
            cover={cover}
            slug={slug}
            title={title}
            excerpt={excerpt}
          />
        );
      })}
    </Wrapper>
  );
};
export default PostGrid;
