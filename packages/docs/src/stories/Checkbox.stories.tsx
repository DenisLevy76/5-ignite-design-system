import { Checkbox, CheckboxProps, Text, Box } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    placeholder: 'Type your name',
    id: 'input'
  },
  decorators: [
    (Story) => {
      return (
        <Box  css={{display: 'flex', gap: '$2'}}>
          <Story />
          <Text as="label" htmlFor="input">Accept terms of use.</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
