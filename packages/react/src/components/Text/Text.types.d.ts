import { ComponentProps, ElementType } from 'react';
import { Text } from './Text.component';

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}