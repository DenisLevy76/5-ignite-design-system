import { ComponentProps, ReactNode } from 'react'
import { TooltipContent } from './Tooltip.styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode
  content: ReactNode
}
