import { ComponentProps, ElementType } from 'react';
import { Heading } from './Heading.component';

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}