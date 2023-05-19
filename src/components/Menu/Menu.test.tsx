import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Menu, { MenuProps } from '.';
import '@testing-library/jest-dom';
import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button menu', () => {
    renderTheme(<Menu {...props} />);

    const button = screen.getByRole('button', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(button).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should render open and close menu with button click', () => {
    renderTheme(<Menu {...props} />);
    const buttonMenu = screen.queryByRole('button', {
      name: 'Open or close menu',
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(buttonMenu!);

    const { menuLink, blogName } = props;
    const { text } = menuLink[0];

    const closeMenuIcon = screen.getByLabelText('Close menu');
    const openMenuIcon = screen.queryByLabelText('Open menu');

    expect(closeMenuIcon).toBeInTheDocument();
    expect(openMenuIcon).not.toBeInTheDocument();
    expect(screen.getByRole('img', { name: blogName })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: blogName })).toHaveAttribute('src');
    expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('navigation')?.querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(menuLink.length);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    fireEvent.click(buttonMenu!);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
