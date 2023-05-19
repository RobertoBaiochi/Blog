import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import HtmlComponent from '.';
import '@testing-library/jest-dom';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlComponent content={'<b>Children</b>'} />);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <HtmlComponent content={'<b>Children</b>'} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="sc-fcfcec56-0 cfAkIA"
      >
        <b>
          Children
        </b>
      </p>
    `);
  });
});
