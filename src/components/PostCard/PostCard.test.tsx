import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import PostCard, { PostCardProps } from '.';
import '@testing-library/jest-dom';
import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);
    const {
      attributes: { cover, excerpt, slug, title },
    } = props;
    const {
      attributes: { alternativeText },
    } = cover.data[0];

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByAltText(alternativeText)).toBeInTheDocument();
    expect(screen.getByText(excerpt)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: title })).toHaveAttribute(
      'href',
      `/post/${slug}`,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
