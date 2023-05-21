import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import PostTags, { PostTagsProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should render a link', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });
});
