import { ComponentProps } from 'react';
import { Input } from './TextInput.styles';

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}