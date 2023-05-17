import * as Styled from './styles';
import HtmlComponent from '../HtmlComponent';

export type FooterProps = {
  footerHtml: string;
};

const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlComponent content={footerHtml} />
    </Styled.Container>
  );
};

export default Footer;
