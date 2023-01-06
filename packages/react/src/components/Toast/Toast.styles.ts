import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  '--viewport-padding': '32px',
  zIndex: 999999,
  position: 'fixed',
  right: 'var(--viewport-padding)',
  bottom: 'var(--viewport-padding)',
  listStyle: 'none',

  display: 'flex',
  flexDirection: 'column',
  outline: 0,
})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  display: 'grid',
  gridTemplateAreas: "'title close' 'description close'",
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minWidth: 360,
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gridArea: 'title',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  background: 'transparent',
  lineHeight: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray200',
  cursor: 'pointer',
  gridArea: 'close',

  '&:focus': {
    boxShadow: '0px 0px 0px 2px $ignite500',
    borderRadius: '$px',
  },
})
