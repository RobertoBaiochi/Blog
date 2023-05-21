import Link from 'next/link';
import { Tags } from '../../shared-typed/tags';
import { Wrapper } from './styles';

export type PostTagsProps = {
  tags: Tags;
};

const PostTags = ({ tags }: PostTagsProps) => {
  return (
    <Wrapper>
      tags:
      {tags.data.map((tag) => {
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
