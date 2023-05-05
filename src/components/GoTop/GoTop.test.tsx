import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import GoTop from '.';
import '@testing-library/jest-dom';

describe('<GoTop />', () => {
  it('should render a go to top button', () => {
    const { container } = renderTheme(<GoTop />);
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchInlineSnapshot(`
      <div>
        <a
          aria-label="Go to top"
          class="sc-31b8cbad-0 TgLlz"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            class="StyledIconBase-sc-ea9ulj-0 kAmBDe"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
