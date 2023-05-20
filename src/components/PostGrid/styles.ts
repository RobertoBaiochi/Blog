import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css`
    width: 100%;

  `};
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacing.large};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `};
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacing.large};
    padding: ${theme.spacing.large};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `};
`;
