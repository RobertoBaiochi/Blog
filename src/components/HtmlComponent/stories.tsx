import { Meta, StoryFn } from '@storybook/react';
import HtmlComponent, { HtmlComponentProps } from '.';

import mock from './mock';

export default {
  title: 'HtmlComponent',
  component: HtmlComponent,
  args: {
    content: mock,
  },
} as Meta;

export const Template: StoryFn<HtmlComponentProps> = (args) => {
  return (
    <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
      <HtmlComponent {...args} />
    </div>
  );
};
