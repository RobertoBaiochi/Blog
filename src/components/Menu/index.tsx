import LogoLink from '../LogoLink';
import MenuLink from '../MenuLink';
import { LogoStrapi } from '../../shared-typed/logo';
import { Wrapper, OpenClose, LogoContainer, Nav } from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export type MenuPropsLinks = {
  id: number;
  link: string;
  text: string;
  newTab?: boolean;
};

export type MenuProps = {
  menuLink: MenuPropsLinks[];
  blogName: string;
  logo: LogoStrapi;
};

const Menu = ({ menuLink = [], logo, blogName }: MenuProps) => {
  const { url } = logo.data.attributes;

  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible((visible) => !visible);
  };

  return (
    <>
      <OpenClose
        aria-label="Open or close menu"
        title="Open or close menu"
        menuVisible={menuVisible}
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </OpenClose>

      <Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Nav>
          <LogoContainer>
            <LogoLink link="/" text={blogName} srcImg={url} />
          </LogoContainer>

          {menuLink.map((link) => (
            <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
              {link.text}
            </MenuLink>
          ))}
        </Nav>
      </Wrapper>
    </>
  );
};
export default Menu;
