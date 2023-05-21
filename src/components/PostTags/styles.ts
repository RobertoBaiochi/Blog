import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;

    span {
      margin-left: ${theme.spacing.xsmall};
      &::after {
        content: ', ';
      }

      &::before {
        content: ' ';
      }

      &:last-child::after {
        content: '';
      }
    }

    a {
      text-decoration: none;
      transition: all 300ms ease-in-out;

      @media( hover: hover) {
        &:hover {
          filter: brightness(50%);
        }
      }
    }

  `}
`;
