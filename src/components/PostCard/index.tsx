import Link from 'next/link';
import { Cover, Excerpt, Wrapper } from './styles';
import Heading from '../Heading';
import { StrapiImage } from '@/shared-typed/cover';

export type PostCardProps = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    cover: StrapiImage;
  };
};

const PostCard = ({ attributes }: PostCardProps) => {
  const { cover, title, slug, excerpt } = attributes;
  const {
    attributes: { alternativeText, url },
  } = cover.data[0];

  return (
    <Wrapper>
      <Link href={`/post/${slug}`}>
        <Cover src={url} alt={alternativeText} />
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>

      <Excerpt>{excerpt}</Excerpt>
    </Wrapper>
  );
};
export default PostCard;
