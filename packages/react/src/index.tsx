import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  color: '$white',
  background: '$ignite500',
  borderRadius: '$md',
  fontWeight: 'bold',
  border: 0,
  cursor: 'pointer',
  transition: 'all 0.15s ease-in-out',

  '&:hover': {
    background: '$ignite300',
  },

  variants: {
    size: {
      small: {
        padding: '$2 $3',
        fontSize: '$sm',
      },
      big: {
        padding: '$3 $4',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
