import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.small};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacing.small};
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacing.medium} 0;
  `};
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacing.medium};
  `};
`;
