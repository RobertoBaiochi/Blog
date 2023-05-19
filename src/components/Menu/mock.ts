import { MenuProps } from '.';
import { data } from '../../api/data.json';

const { setting } = data;

const {
  data: {
    attributes: { menuLink, blogName, logo },
  },
} = setting;

export default {
  blogName,
  menuLink,
  logo,
} as unknown as MenuProps;
