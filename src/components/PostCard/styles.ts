import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-decoration: none;

    ${HeadingStyles} {
      margin: 0;
      margin: ${theme.spacing.small} 0;
      padding-inline: ${theme.spacing.xsmall};
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    @media( hover: hover) {
      &:hover a {
        color: ${theme.colors.secondary};
      }

      &:hover img {
        opacity: 0.8;
      }
    }

  `}
`;

export const Cover = styled.img`
  ${() => css`
    width: 100%;
    height: 200px;
    transition: all 300ms ease-in-out;
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.darkText};
    padding-inline: ${theme.spacing.xsmall};
  `};
`;
