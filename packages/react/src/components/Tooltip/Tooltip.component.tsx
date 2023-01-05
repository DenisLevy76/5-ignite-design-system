import { TooltipArrow, TooltipContent, TooltipWrapper } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types.d'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = RadixTooltip.Provider

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  ...props
}) => {
  return (
    <TooltipWrapper>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <TooltipContent {...props}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </RadixTooltip.Portal>
    </TooltipWrapper>
  )
}

Tooltip.displayName = 'Tooltip'
