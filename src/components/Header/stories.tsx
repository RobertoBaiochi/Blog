import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from '.';

import mock from './mock';

export default {
  title: 'Header',
  component: Header,
  args: mock,
} as Meta<HeaderProps>;

export const Template: StoryFn<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};

/*
  fazendo a alteração para a forma mais robusta de servir a API
  os Controls são alterados para objetos que necessitam de alguma forma
  que deve ser pesquisida para manter a possibilidade de fazer alterações
*/
