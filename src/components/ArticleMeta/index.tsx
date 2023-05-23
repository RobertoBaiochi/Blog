import { formatDate } from '../../utils/format-date';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { Wrapper } from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};

const ArticleMeta = ({
  createdAt,
  author = undefined,
  categories = [],
}: ArticleMetaProps) => {
  return (
    <Wrapper>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <a href={`/author/${author?.attributes.slug}`}>
              {author?.attributes.displayName}
            </a>
            <span className="separator"> | </span>
          </>
        )}

        <time dateTime={createdAt}>{formatDate(createdAt)}</time>

        {categories.length > 0 && (
          <>
            <span className="separator"> | </span>
            <span className="categories">
              {categories.map((category) => {
                const {
                  id,
                  attributes: { displayName, slug },
                } = category;

                return (
                  <span key={`article-meta-cat-${id}`}>
                    <a href={`/category/${slug}`}>{displayName}</a>
                  </span>
                );
              })}
            </span>
          </>
        )}
      </p>
    </Wrapper>
  );
};
export default ArticleMeta;
