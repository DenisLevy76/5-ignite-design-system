import { Box, Text, TextArea, TextAreaProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Type any observations.',
    id: 'textarea',
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text as="label" htmlFor="textarea">
            Observations
          </Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
