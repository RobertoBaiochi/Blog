import { Meta, StoryFn } from '@storybook/react';
import Post, { PostProps } from '.';

export default {
  title: 'Post',
  component: Post,
} as Meta<PostProps>;

export const Template: StoryFn<PostProps> = (args) => {
  return (
    <div>
      <Post {...args} />
    </div>
  );
};
