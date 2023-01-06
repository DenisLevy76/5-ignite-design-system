import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastViewport,
} from './Toast.styles'
import { ToastProps } from './Toast.types.d'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { Heading } from '../Heading'

export const Toast: React.FC<ToastProps> = ({ title, description, ...props }) => {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <RadixToast.Title asChild>
          <Heading as="h4" size="sm">
            {title}
          </Heading>
        </RadixToast.Title>
        <ToastDescription asChild>
          <Text>{description}</Text>
        </ToastDescription>
        <ToastClose aria-label="Close">
          <X size={20} />
        </ToastClose>
      </ToastContainer>
      <ToastViewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'
