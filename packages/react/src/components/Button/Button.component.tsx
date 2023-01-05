import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',

  color: '$white',
  fontWeight: '$medium',
  fontFamily: '$default',
  fontSize: '$md',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  transition: 'all 0.15s ease-in-out',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      contained: {
        backgroundColor: '$ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },
      outlined: {
        border: '2px solid $ignite500',
        color: '$ignite500',
        backgroundColor: 'transparent',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
        },
      },
      text: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        padding: '$2 $4',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'contained',
    size: 'md',
  },

  '&:not(:disabled):hover': {
    cursor: 'pointer',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

Button.displayName = 'Button'
