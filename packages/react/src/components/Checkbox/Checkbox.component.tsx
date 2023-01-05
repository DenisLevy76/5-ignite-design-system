import { Check } from 'phosphor-react';
import { CheckboxContainer, CheckboxIndicator } from './Checkbox.styles';

export const Checkbox: React.FC = (props) => {
  return <CheckboxContainer {...props}>
    <CheckboxIndicator asChild>
      <Check weight='bold' />
    </CheckboxIndicator>
  </CheckboxContainer>;
}

Checkbox.displayName = 'Checkbox'
