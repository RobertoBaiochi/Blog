import * as Styled from './styles';
import Link from 'next/link';

import Heading from '../Heading';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Link href={link} passHref target={target}>
        <Styled.Container>
          {!!srcImg && <Styled.ImageLogo src={srcImg} alt={text} />}
          {!srcImg && (
            <Heading size="small" uppercase>
              {text}
            </Heading>
          )}
        </Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.ContainerLink href={link} target={target}>
      {!!srcImg && <Styled.ImageLogo src={srcImg} alt={text} />}
      {!srcImg && (
        <Heading size="small" uppercase>
          {text}
        </Heading>
      )}
    </Styled.ContainerLink>
  );
};

export default LogoLink;
