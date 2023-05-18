import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ArticleHeader, { ArticleHeaderProps } from '.';
import '@testing-library/jest-dom';
import mock from './mock';
import { formatDate } from '@/utils/format-date';

const props: ArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    renderTheme(<ArticleHeader {...props} />);

    const { alternativeText } = props.cover.data[0].attributes;

    const title = screen.getByRole('heading', {
      name: props.title,
    });

    const img = screen.getByRole('img', {
      name: alternativeText,
    });

    const excerpt = screen.getByText(props.excerpt);

    const date = screen.getByText(formatDate(props.createdAt));

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(excerpt).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });

  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(container).toMatchSnapshot();
  });
});
