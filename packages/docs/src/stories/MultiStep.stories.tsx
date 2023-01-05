import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    numberOfSteps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const FirstStep: StoryObj<MultiStepProps> = {
  decorators: [],
}
export const Complete: StoryObj<MultiStepProps> = {
  args: {
    numberOfSteps: 4,
    currentStep: 4,
  },
}
