import { Input, InputPrefix, TextInputContainer } from './TextInput.styles';
import { TextInputProps } from './TextInput.types.d';

export const TextInput: React.FC<TextInputProps> = ({prefix, ...props}) => {
  return <TextInputContainer>
    {!!prefix && (<InputPrefix as="span" size="sm">{prefix}</InputPrefix>)}
    <Input type="text" {...props} />
  </TextInputContainer>;
}
