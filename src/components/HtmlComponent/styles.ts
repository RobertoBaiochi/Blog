import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.small} + 0.2rem);
    line-height: 1.5;

    p {
      margin: ${theme.spacing.medium} 0;
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

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      width: 100%;
      background: ${theme.colors.primary};
      padding: ${theme.spacing.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacing.medium} 0;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacing.medium} 0;
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
      margin: ${theme.spacing.medium} 0;
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    ul, ol {
      margin: ${theme.spacing.medium} ${theme.spacing.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacing.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkerGray};
      filter: brightness(80%);
      padding-left: ${theme.spacing.medium};
      font-style: italic;
      margin: ${theme.spacing.medium};
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
