import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Header from '.';
import '@testing-library/jest-dom';

import props from './mock';

/* as partes comentadas são para utilização do mock de forma simples
  caso o projeto mais pra frente necessite de uma alteração
  na hora de servir a API, deixei a forma mais robusta
  de acordo com a API para acessar diretamente as propriedades.


  OBS: TIRAR O PROPS de PROPS.BLOGNAME
*/

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);
    // const {
    //   setting: {
    //     data: {
    //       attributes: {
    //         blogDescription,
    //         blogName,
    //         logo: {
    //           data: {
    //             attributes: { url },
    //           },
    //         },
    //       },
    //     },
    //   },
    // } = props;

    const altImage = screen.getByAltText(props.blogName);
    const descriptionBlog = screen.getAllByText(props.blogDescription)[0];
    const blogTitle = screen.getByRole('heading', {
      name: props.blogName,
    });
    const image = screen.getByRole('img', { name: props.blogName });

    expect(altImage).toBeInTheDocument();
    expect(descriptionBlog).toBeInTheDocument();
    expect(blogTitle).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.url);
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);
    // const {
    //   setting: {
    //     data: {
    //       attributes: {
    //         blogDescription,
    //         blogName,
    //         logo: {
    //           data: {
    //             attributes: { url },
    //           },
    //         },
    //       },
    //     },
    //   },
    // } = props;

    const image = screen.getByRole('img', { name: props.blogName });
    const blogTitle = screen.queryByRole('heading', {
      name: props.blogName,
    });
    const descriptionBlog = screen.queryByText(props.blogDescription);

    expect(image).toHaveAttribute('src', props.url);
    expect(blogTitle).not.toBeInTheDocument();
    expect(descriptionBlog).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
