import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ArticleMeta, { ArticleMetaProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);
    const {
      categories,
      author: { displayNameAuthor, slugAuthor },
    } = props;
    const {
      attributes: { displayName, slug },
    } = categories.data[0];

    const linkAuthor = screen.getByRole('link', {
      name: displayNameAuthor,
    });
    const linkCategoryNext = screen.getByRole('link', {
      name: displayName,
    });

    expect(linkAuthor).toHaveAttribute('href', `/author/${slugAuthor}`);
    expect(linkCategoryNext).toHaveAttribute('href', `/category/${slug}`);
  });

  it('should render formated date', () => {
    renderTheme(<ArticleMeta {...props} />);
    const date = screen.getByText('9 de mai. de 2023');

    expect(date).toHaveAttribute('datetime', props.createdAt);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot;
  });
});
