import { SettingsStrapi } from '../../shared-typed/settings';
import {
  Wrapper,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
} from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GoTop from '../..//components/GoTop';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Menu
        blogName={settings.blogName}
        menuLink={settings.menuLink}
        logo={settings.logo}
      />

      <HeaderContainer>
        <Header
          blogName={settings.blogName}
          logo={settings.logo}
          blogDescription={settings.blogDescription}
        />
      </HeaderContainer>

      <ContentContainer>{children}</ContentContainer>

      <FooterContainer>
        <Footer footerHtml={settings.footer} />
      </FooterContainer>

      <GoTop />
    </Wrapper>
  );
};
export default BaseTemplate;
