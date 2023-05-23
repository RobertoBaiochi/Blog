import { LogoStrapi } from '@/shared-typed/logo';
import Heading from '../Heading';
import LogoLink from '../LogoLink';
import { HeaderContainer, TextContainer } from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: LogoStrapi;
} & {
  showText?: boolean;
};

const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  const {
    attributes: { url },
  } = logo.data;

  return (
    <HeaderContainer>
      <LogoLink link="/" srcImg={url} text={blogName} />

      {showText && (
        <TextContainer>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </TextContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
