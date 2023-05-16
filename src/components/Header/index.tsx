import Heading from '../Heading';
import LogoLink from '../LogoLink';
import { HeaderContainer, TextContainer } from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  altText?: string;
  showText?: boolean;
};

const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoLink link="/" srcImg={logo} text={blogName} />

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
