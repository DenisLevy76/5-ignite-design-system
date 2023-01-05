import { styled } from '../../styles'
import { Text } from '../Text'

export const TextInputContainer = styled('label', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  transition: 'all 0.2s ease-in-out',

  '&:focus-within': {
    borderColor: '$ignite300',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const InputPrefix = styled(Text, {
  color: '$gray400',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  width: '100%',
  border: 0,

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'inherit',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
