import { data } from '../../api/data.json';

const { setting } = data;
const {
  data: {
    id,
    attributes: {
      blogName,
      blogDescription,
      logo: {
        data: {
          attributes: { url, alternativeText },
        },
      },
    },
  },
} = setting;

export default {
  id,
  blogName,
  blogDescription,
  url,
  alternativeText,
} as const;

/*
  a Exportação abaixo pode ser utilizada mais para frente caso necessite servir a API
  de forma mais robusta, fazendo a desestruturação direto no componente para receber
  as propriedades desejadas
*/

// export default {
//   setting: {
//     data: {
//       id: '1',
//       attributes: {
//         blogName: 'Console.Blog',
//         blogDescription: 'Debuggando passo a passo do conhecimento',
//         logo: {
//           data: {
//             id: '8',
//             attributes: {
//               alternativeText: 'Roberto Baiochi',
//               url: 'https://res.cloudinary.com/dfmbf9sae/image/upload/v1683608645/carta_410436ad20.jpg',
//             },
//           },
//         },
//       },
//     },
//   },
// } as const;
