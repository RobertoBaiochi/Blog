import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Light: StoryObj<HeadingProps> = (args: HeadingProps) => (
  <Heading size="small" {...args} />
);
export const Dark: StoryObj<HeadingProps> = (args: HeadingProps) => (
  <Heading size="small" {...args} />
);

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
