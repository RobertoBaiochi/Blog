import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Footer from '.';
import '@testing-library/jest-dom';

describe('<Footer />', () => {
  it('should render html', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Teste</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Teste' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-32211b0-0 gGtWnP"
        >
          <p
            class="sc-b498942-0 krpTnp"
          >
            <h1>
              Teste
            </h1>
          </p>
        </footer>
      </div>
    `);
  });
});
