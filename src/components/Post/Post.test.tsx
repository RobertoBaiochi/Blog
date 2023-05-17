import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Post, { PostProps } from '.';
import '@testing-library/jest-dom';

const props: PostProps = {
  title: 'any',
};

describe('<Post />', () => {
  it('should render', () => {
    renderTheme(<Post {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
