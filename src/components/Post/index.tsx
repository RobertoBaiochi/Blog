import { Wrapper } from './styles';
import ArticleHeader, { ArticleHeaderProps } from '../ArticleHeader';
import HtmlComponent from '../HtmlComponent';
import { Content } from '../../shared-typed/content';
import { PostContainer } from '../PostContainer';

export type PostProps = ArticleHeaderProps & Content;

const Post = ({
  author,
  categories,
  cover,
  createdAt,
  excerpt,
  title,
  content,
}: PostProps) => {
  return (
    <Wrapper>
      <PostContainer size="max">
        <ArticleHeader
          author={author}
          categories={categories}
          cover={cover}
          createdAt={createdAt}
          excerpt={excerpt}
          title={title}
        />
      </PostContainer>

      <PostContainer size="content">
        <HtmlComponent content={content} />
      </PostContainer>
    </Wrapper>
  );
};
export default Post;
