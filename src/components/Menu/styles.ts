import styled, { DefaultTheme, css } from 'styled-components';

import { Title as HeadingStyle } from '../Heading/styles';
import { ImageLogo as ImageLogoStyle } from '../LogoLink/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const wrapperChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-31rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    background: ${theme.colors.primary};
    padding: ${theme.spacing.large};
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: all 300ms ease-in-out;

    ${wrapperChanger(menuVisible, theme)};
  `}
`;

export const Nav = styled.nav`
  ${() => css`
    width: 100%;
    margin: auto;
  `};
`;

export const LogoContainer = styled.nav`
  ${({ theme }) => css`
      display: flex;
      justify-content: center;

    ${HeadingStyle}, ${ImageLogoStyle} {
      margin: 0;
      margin-bottom: ${theme.spacing.xlarge};
    }

    ${ImageLogoStyle} {
      border: 0.5rem solid ${theme.colors.secondary};
    }
  `};
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '26rem' : '1rem'};
  }
`;

export const OpenClose = styled.button<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacing.medium};
    left: 26rem;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    outline: transparent;
    border: 0.2rem solid ${theme.colors.primary};
    cursor: pointer;
    transition: all 300ms ease-in-out;

    ${buttonChanger(menuVisible, theme)};
  `};
`;
