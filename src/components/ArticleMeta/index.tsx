import { formatDate } from '../../utils/format-date';
import { Wrapper } from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  return (
    <Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.slug}`}>{author.displayName}</a>
        <span className="separator"> | </span>
        <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="categories">
          {categories.map((category) => (
            <span key={`article-meta-cat-${category.id}`}>
              <a href={`/category/${category.slug}`}>{category.displayName}</a>
            </span>
          ))}
        </span>
      </p>
    </Wrapper>
  );
};
export default ArticleMeta;
