import Heading from '../Heading';
import LogoLink from '../LogoLink';
import { HeaderContainer, TextContainer } from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  alternativeText: string;
  url: string;
} & {
  showText?: boolean;
};

const Header = ({
  blogName,
  blogDescription,
  url,
  showText = true,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoLink link="/" srcImg={url} text={blogName} />

      {showText && (
        <TextContainer>
          <Heading size="small" as="h2" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </TextContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;

/*
  As alterações abaixo são para servir a API de acordo com o STRAPI
  como não sei como as coisas vão funcionar daqui pra frente, vou deixar dessa forma
  que até então está sendo utilizada.

  Acredito que a melhor forma será MAIS PRA FRENTE, criar funções ligadas que recebam a API,
  fazendo a desestruturação, e retornando cada propriedade que preciso.
  porém pra isso, é necessário no final de tudo, salva os dados dessa limpeza da API em um
  USESTATE e servir desse useSTATE para todos.
  OBS: VER PROJECT-3 na pasta API.
 */

// export type HeaderProps = {
//   setting: {
//     data: {
//       id: string;
//       attributes: {
//         blogName: string;
//         blogDescription: string;
//         logo: {
//           data: {
//             id: string;
//             attributes: {
//               alternativeText: string;
//               url: string;
//             };
//           };
//         };
//       };
//     };
//   };
// } & {
//   showText?: boolean;
// };

// const Header = ({
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
//   showText = true,
// }: HeaderProps) => {
//   return (
//     <HeaderContainer>
//       <LogoLink link="/" srcImg={url} text={blogName} />

//       {showText && (
//         <TextContainer>
//           <Heading size="small" as="h2" colorDark={true}>
//             {blogName}
//           </Heading>
//           <p>{blogDescription}</p>
//         </TextContainer>
//       )}
//     </HeaderContainer>
//   );
// };
// export default Header;
