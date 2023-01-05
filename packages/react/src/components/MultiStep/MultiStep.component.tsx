import { Label, MultiStepContainer, Step, Steps } from './MultiStep.styles';
import { MultiStepProps } from './MultiStep.types.d';

export const MultiStep: React.FC<MultiStepProps> = ({currentStep = 1, numberOfSteps}) => {
  return <MultiStepContainer>
    <Label size="xs">Passo {currentStep} de {numberOfSteps}</Label>
    <Steps css={{'--steps-size': numberOfSteps}}>
      {Array.from({length: numberOfSteps}, (_, index) => index + 1 ).map(step => (
        <Step key={step} active={currentStep === step} done={currentStep > step} />
      ))}
    </Steps>
  </MultiStepContainer>;
}
