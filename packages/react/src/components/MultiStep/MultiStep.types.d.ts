import { ComponentProps } from 'react';
import { MultiStep } from './MultiStep.styles';

export interface MultiStepProps extends ComponentProps<typeof MultiStep> {
  numberOfSteps: number
  currentStep?: number
}