import { HeaderProps } from '.';
import { data } from '../../api/data.json';

const { setting } = data;
const {
  data: {
    id,
    attributes: { blogName, blogDescription },
  },
} = setting;

export default {
  id,
  blogName,
  blogDescription,
  logo: data.setting.data.attributes.logo.data,
} as unknown as HeaderProps;
