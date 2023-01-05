import { ComponentProps, ElementType } from 'react'
import { Box } from './Box.component'

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
