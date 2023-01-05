import { Heading, HeadingProps } from '@ignite-ui/react'
import { StoryObj, Meta } from "@storybook/react"

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quaerat eaque. Distinctio omnis quibusdam similique ab pariatur. Quasi voluptatibus aliquid ratione magni explicabo? Nulla enim expedita culpa vel dignissimos. Illo.',
    size: 'md',
  },
  argTypes: {
    size: {control: 'inline-radio', options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],},
  }
} as Meta<HeadingProps>

export const Title: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'Strong Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, the Heading component uses the `h2` tag, however, this can be changed using the `as` property',
      }
    }
  }
}
