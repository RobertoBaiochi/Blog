import { BaseTemplateProps } from '.';
import { data } from '../../api/data.json';

export default {
  settings: data.setting.data,
  children: 'olá mundo',
} as BaseTemplateProps;
