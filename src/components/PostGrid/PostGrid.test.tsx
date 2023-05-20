import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import PostGrid, { PostGridProps } from '.';
import '@testing-library/jest-dom';
import mock from './mock';

const props: PostGridProps = mock;
describe('<PostGrid />', () => {
  it('should render', () => {
    renderTheme(<PostGrid {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
