import PostCard, { PostCardProps } from '../PostCard';
import { Wrapper, NotFound, GridContainer } from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
};

const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Wrapper>
      {posts.length === 0 && <NotFound>Nenhum post encontrado aqui</NotFound>}

      <GridContainer>
        {posts.length > 0 &&
          posts.map((post) => {
            const {
              id,
              attributes: { slug },
            } = post;

            return <PostCard key={`${slug}+${id}`} {...post} />;
          })}
      </GridContainer>
    </Wrapper>
  );
};
export default PostGrid;
