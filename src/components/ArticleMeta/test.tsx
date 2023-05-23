/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ArticleMeta, { ArticleMetaProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);
    const { displayName, slug } = props.categories![0].attributes;
    const { displayName: authorName, slug: authorSlug } =
      props.author!.attributes;

    const linkAuthor = screen.getByRole('link', {
      name: authorName,
    });
    const linkCategoryNext = screen.getByRole('link', {
      name: displayName,
    });

    expect(linkAuthor).toHaveAttribute('href', `/author/${authorSlug}`);
    expect(linkCategoryNext).toHaveAttribute('href', `/category/${slug}`);
  });

  it('should render formated date', () => {
    renderTheme(<ArticleMeta {...props} />);
    const date = screen.getByText('9 de mai. de 2023');

    expect(date).toHaveAttribute('datetime', props.createdAt);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with no author and categories', () => {
    const { container } = renderTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
