import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
} as Meta<HeaderProps>;

export const Template: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
