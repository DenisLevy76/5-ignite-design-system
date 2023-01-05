import {
  Box,
  Text,
  Tooltip,
  TooltipContainer,
  TooltipProps,
} from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Box
        css={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
        }}
      >
        <Text>26</Text>
      </Box>
    ),
    content: <Text>26 de Outubro - Disponível</Text>,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
