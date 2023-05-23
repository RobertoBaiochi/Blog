import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import BaseTemplate, { BaseTemplateProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('should render', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
