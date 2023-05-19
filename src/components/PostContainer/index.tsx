import styled, { DefaultTheme, css } from 'styled-components';

export type PostContainerProps = {
  size: 'max' | 'content';
};

const postContainerStyles = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.maxWidth};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.maxContent};
  `,
};

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin-inline: auto;
    padding-inline: ${theme.spacing.large};
    ${postContainerStyles[size](theme)}

    @media ${theme.media.lteMedium} {
      padding-inline: ${theme.spacing.small};
    }
  `};
`;
