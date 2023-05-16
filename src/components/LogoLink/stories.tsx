import type { Meta, StoryFn } from '@storybook/react';
import LogoLink, { LogoLinkProps } from '.';
const imageFile = '/static/images/carta.jpg';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: imageFile,
    link: 'https://localhost',
    newTab: false,
  },
} as Meta<LogoLinkProps>;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
