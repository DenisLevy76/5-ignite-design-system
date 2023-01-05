import { Text, TextProps } from '@ignite-ui/react'
import { StoryObj, Meta } from "@storybook/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quaerat eaque. Distinctio omnis quibusdam similique ab pariatur. Quasi voluptatibus aliquid ratione magni explicabo? Nulla enim expedita culpa vel dignissimos. Illo.',
    size: 'md',
  },
  argTypes: {
    size: {control: 'inline-radio', options: [
      'xxs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '4xl',
      '5xl',
      '6xl',
      '7xl',
      '8xl',
      '9xl',
    ],},
  }
} as Meta<TextProps>

export const Paragraph: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
