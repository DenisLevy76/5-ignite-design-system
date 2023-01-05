import { ComponentProps } from 'react'
import { MultiStep } from './MultiStep.component'

export interface MultiStepProps extends ComponentProps<typeof MultiStep> {
  numberOfSteps: number
  currentStep?: number
}
