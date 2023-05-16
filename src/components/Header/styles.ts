import styled, { css } from 'styled-components';

import { Title as HeadingHeader } from '../Heading/styles';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.maxWidth};
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacing.huge};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};

    ${HeadingHeader} {
      margin: 0 0 calc(${theme.spacing.small} - 3rem);
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    max-width: 48rem;
    height: 100%;
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacing.large};
  `};
`;
