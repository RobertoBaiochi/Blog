import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import ArticleMeta, { ArticleMetaProps } from '.';
import '@testing-library/jest-dom';

const props: ArticleMetaProps = {
  title: 'string',
};

describe('<ArticleMeta />', () => {
  it('should render', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
