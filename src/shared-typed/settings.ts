import { MenuPropsLinks } from '@/components/Menu';
import { LogoStrapi } from './logo';

export type SettingsStrapi = {
  id: number;
  attributes: {
    blogName: string;
    blogDescription: string;
    footer: string;
    logo: LogoStrapi;
    menuLink: MenuPropsLinks[];
  };
};
