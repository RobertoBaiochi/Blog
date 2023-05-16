import { Author } from '../shared-typed/author';
import { Category } from '../shared-typed/category';
import { Wrapper } from './styles';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};

const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  return (
    <Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Wrapper>
  );
};
export default ArticleMeta;
