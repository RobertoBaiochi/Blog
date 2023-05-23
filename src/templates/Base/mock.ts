import { BaseTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting.data.attributes,
  children: 'olá mundo',
} as unknown as BaseTemplateProps;
