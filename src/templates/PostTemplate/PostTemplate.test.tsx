import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import PostTemplate, { PostTemplateProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: PostTemplateProps = mock;

describe('<PostTemplate />', () => {
  it('should render', () => {
    renderTheme(<PostTemplate {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
