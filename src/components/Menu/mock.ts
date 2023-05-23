import { MenuProps } from '.';
import { data } from '../../api/data.json';

const { setting } = data;

const {
  data: {
    attributes: { blogName },
  },
} = setting;

export default {
  blogName,
  menuLink: data.setting.data.attributes.menuLink,
  logo: data.setting.data.attributes.logo,
} as unknown as MenuProps;
