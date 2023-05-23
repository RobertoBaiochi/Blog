import Link from 'next/link';
import { Tags } from '../../shared-typed/tags';
import { Wrapper } from './styles';

export type PostTagsProps = {
  tags?: Tags[];
};

const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      tags:
      {tags.map((tag) => {
        const {
          id,
          attributes: { slug, displayName },
        } = tag;
        return (
          <span key={`${slug}+${id}`}>
            <Link href={`/tags/${slug}`}>{displayName}</Link>
          </span>
        );
      })}
    </Wrapper>
  );
};
export default PostTags;
