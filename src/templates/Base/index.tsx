import { SettingsStrapi } from '../../shared-typed/settings';
import {
  Wrapper,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
} from './styles';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

export type BaseTemplateProps = {
  settings: SettingsStrapi;
  children: React.ReactNode;
};

const BaseTemplate = ({ settings, children }: BaseTemplateProps) => {
  return (
    <Wrapper>
      <Menu
        blogName={settings.attributes.blogName}
        menuLink={settings.attributes.menuLink}
        logo={settings.attributes.logo}
      />

      <HeaderContainer>
        <Header
          blogName={settings.attributes.blogName}
          logo={settings.attributes.logo}
          blogDescription={settings.attributes.blogDescription}
        />
      </HeaderContainer>

      <ContentContainer></ContentContainer>

      <FooterContainer></FooterContainer>
    </Wrapper>
  );
};
export default BaseTemplate;
