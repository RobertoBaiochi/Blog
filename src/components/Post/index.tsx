import { Wrapper } from './styles';

import { ArticleHeaderProps } from '../ArticleHeader';


import ArticleHeader from '../ArticleHeader';
import HtmlComponent from '../HtmlComponent';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

const Post = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  content,
  id,
}: PostProps) => {
  return (
    <Wrapper>
      <ArticleHeader
        author={author}
        categories={categories}
        createdAt={createdAt}
        cover={cover}
        title={title}
        excerpt={excerpt}
        id={id}
      />
      <HtmlComponent html={content} />
    </Wrapper>
  );
};
export default Post;
