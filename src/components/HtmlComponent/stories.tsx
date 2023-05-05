import { Meta, StoryFn } from '@storybook/react';
import HtmlComponent, { HtmlComponentProps } from '.';

export default {
  title: 'HtmlComponent',
  component: HtmlComponent,
  args: {
    html: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Incidunt saepe debitis distinctio facilis quam voluptatem quae eos corrupti
    aut praesentium eius ipsa voluptates similique possimus voluptas nam dolore,
    sed maxime.`,
  },
} as Meta;

export const Template: StoryFn<HtmlComponentProps> = (args) => {
  return (
    <div style={{ maxWidth: '64rem' }}>
      <HtmlComponent {...args} />
    </div>
  );
};
