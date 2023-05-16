import { Author } from '../shared-typed/author';
import { Category } from '../shared-typed/category';
import { StrapiImage } from '../shared-typed/cover';
import { Wrapper, Excerpt, Cover } from './styles';

import Heading from '../Heading';
import ArticleMeta from '../ArticleMeta';

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
  author: Author;
  categories: Category[];
  createdAt: string;
};

const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  return (
    <Wrapper>
      <Heading as="h3" size="big">
        {title}
      </Heading>

      <Excerpt>{excerpt}</Excerpt>

      <Cover src={cover.url} alt={cover.alternativeText} />

      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Wrapper>
  );
};
export default ArticleHeader;
