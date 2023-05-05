import { Meta, StoryFn } from '@storybook/react';
import Footer, { FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://robertobaiochi.com.br">Feito com ❤ por Roberto Baiochi</a></p>`,
  },
} as Meta;

export const Template: StoryFn<FooterProps> = (args: FooterProps) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
