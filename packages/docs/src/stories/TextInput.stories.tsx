import { TextInput, TextInputProps, Text, Box } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    placeholder: 'Type your name',
    id: 'input'
  },
  decorators: [
    (Story) => {
      return (
        <Box  css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
          <Text as="label" htmlFor="input">Type your name</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'calc.com/',
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  }
}
