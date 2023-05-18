import { formatDate } from '../../utils/format-date';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { Wrapper } from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category;
};

const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  const {
    attributes: { displayName: displayNameAuthor, slug: slugAuthor },
  } = author.data;
  return (
    <Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${slugAuthor}`}>{displayNameAuthor}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="categories">
          {categories.data.map((category) => {
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
      </p>
    </Wrapper>
  );
};
export default ArticleMeta;
