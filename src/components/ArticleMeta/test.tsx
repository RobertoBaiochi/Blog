import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ArticleMeta, { ArticleMetaProps } from '.';
import '@testing-library/jest-dom';

import mock from './mock';

const props: ArticleMetaProps = mock;

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);
    const linkAuthor = screen.getByRole('link', { name: 'Roberto Baiochi' });
    const linkCategoryNext = screen.getByRole('link', { name: 'NextJs' });
    const linkCategoryReact = screen.getByRole('link', { name: 'ReactJs' });

    expect(linkAuthor).toHaveAttribute('href', '/author/roberto-baiochi');
    expect(linkCategoryNext).toHaveAttribute('href', '/category/next-js');
    expect(linkCategoryReact).toHaveAttribute('href', '/category/react-js');
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
