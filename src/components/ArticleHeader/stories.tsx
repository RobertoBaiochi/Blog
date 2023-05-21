import { Meta, StoryFn } from '@storybook/react';
import ArticleHeader, { ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta<ArticleHeaderProps>;

export const Template: StoryFn<ArticleHeaderProps> = (args) => {
  return (
    <div style={{ maxWidth: '96rem', marginInline: 'auto' }}>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi, ad
        cumque illo laudantium, ab quod et quos omnis perspiciatis odit
        dignissimos facilis vitae? Rerum culpa cupiditate labore quas
        dignissimos.
      </p>
    </div>
  );
};
