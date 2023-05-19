import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Post, { PostProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';
import { formatDate } from '../../utils/format-date';

const props: PostProps = mock;

describe('<Post />', () => {
  it('should render header, excerpt, cover, metadata and post', () => {
    renderTheme(<Post {...props} />);
    const { title, createdAt, excerpt, cover } = props;
    const { alternativeText } = cover.data[0].attributes;

    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: alternativeText }),
    ).toBeInTheDocument();
    expect(screen.getByText(formatDate(createdAt))).toBeInTheDocument();
    expect(screen.getByText(excerpt)).toBeInTheDocument();
    expect(screen.getByText(/^A internacionalização/i)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(container).toMatchSnapshot;
  });
});
