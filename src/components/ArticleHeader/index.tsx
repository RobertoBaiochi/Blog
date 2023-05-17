import { StrapiImage } from '../../shared-typed/cover';
import { Wrapper, Excerpt, Cover } from './styles';

import Heading from '../Heading';
import ArticleMeta, { ArticleMetaProps } from '../ArticleMeta';

export type ArticleHeaderProps = {
  id?: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;

const ArticleHeader = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
}: ArticleHeaderProps) => {
  const { alternativeText, url } = cover.data[0].attributes;
  return (
    <Wrapper>
      <Heading as="h3" size="big">
        {title}
      </Heading>

      <Excerpt>{excerpt}</Excerpt>

      <Cover src={url} alt={alternativeText} />

      <ArticleMeta
        author={author}
        categories={categories}
        createdAt={createdAt}
      />
    </Wrapper>
  );
};
export default ArticleHeader;
