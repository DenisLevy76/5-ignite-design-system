import { Button, ButtonProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Click me',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Click me',
    size: 'big',
  },
}
