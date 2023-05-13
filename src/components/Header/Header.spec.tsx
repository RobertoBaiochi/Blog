import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Header, { HeaderProps } from '.';
import '@testing-library/jest-dom';

const props: HeaderProps = {
  title: 'any',
};

describe('<Header />', () => {
  it('should render', () => {
    renderTheme(<Header {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
