import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: ${theme.spacing.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.secondary};
  `};
`;
