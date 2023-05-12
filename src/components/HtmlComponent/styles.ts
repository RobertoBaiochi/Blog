import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    p {
      margin: ${theme.spacing.large} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    a:hover {
      filter: brightness(50%);
    }

    pre {
      width: 100%;
      background: ${theme.colors.primary};
      padding: ${theme.spacing.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacing.xlarge} 0;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacing.xlarge};
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacing.small};
      text-align: center;
      line-height: 1.3;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacing.medium};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacing.xlarge};
    }

    @media ${theme.media.lteMedium} {
        font-size: 2rem;

        .image-style-side {
          max-width: 100%;
          float: none;
          margin: 0;
        }
      }

  `};
`;
