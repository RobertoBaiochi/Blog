import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Menu, { MenuProps } from '.';
import '@testing-library/jest-dom';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
