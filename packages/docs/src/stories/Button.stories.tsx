import { Button, ButtonProps } from '@ignite-ui/react'
import { StoryObj, Meta } from "@storybook/react"
import { Handbag } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    size: {control: 'radio', options: ['sm', 'md']},
    variant: {control: 'radio', options: ['contained', 'outlined', 'text']}
  },
  args: {
    variant: 'contained',
    size: 'md',
    disabled: false,
  }
} as Meta<ButtonProps>

export const Contained: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
  }
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outlined',
    children: 'Remove',
  }
}

export const Text: StoryObj<ButtonProps> = {
  args: {
    variant: 'text',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'create',
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Handbag size={24} weight="bold" />
        Adicionar ao carrinho
        <Handbag size={24} weight="bold" />
      </>
    ),
  }
}


export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    disabled: true,
    variant: 'contained'
  }
}