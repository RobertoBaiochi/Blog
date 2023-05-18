import { Wrapper } from './styles';
import ArticleHeader, { ArticleHeaderProps } from '../ArticleHeader';
import HtmlComponent from '../HtmlComponent';
import { Content } from '../..content/shared-typed/content';

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
      <ArticleHeader
        author={author}
        categories={categories}
        cover={cover}
        createdAt={createdAt}
        excerpt={excerpt}
        title={title}
      />

      <HtmlComponent content={content} />
    </Wrapper>
  );
};
export default Post;
