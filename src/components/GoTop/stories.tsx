import { Meta, StoryFn } from '@storybook/react';
import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
} as Meta;

export const Template: StoryFn = (args) => {
  return (
    <div>
      <GoTop {...args} />
    </div>
  );
};
