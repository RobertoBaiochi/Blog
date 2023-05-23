import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xhuge};
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin-inline: auto;
    margin-bottom: ${theme.spacing.xhuge};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin-inline: auto;
    padding: ${theme.spacing.large};
  `}
`;
