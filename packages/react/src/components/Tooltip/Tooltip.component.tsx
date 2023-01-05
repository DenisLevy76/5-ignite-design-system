import { TooltipArrow, TooltipContent, TooltipWrapper } from './Tooltip.styles'
import { TooltipProps } from './Tooltip.types.d'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  ...props
}) => {
  return (
    <RadixTooltip.Provider>
      <TooltipWrapper>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </TooltipWrapper>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
