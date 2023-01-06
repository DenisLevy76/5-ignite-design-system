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

export const Toast: React.FC<ToastProps> = ({ ...props }) => {
  return (
    <RadixToast.Provider>
      <ToastContainer {...props}>
        <RadixToast.Title asChild>
          <Heading as="h4" size="sm">
            Agendamento realizado
          </Heading>
        </RadixToast.Title>
        <ToastDescription asChild>
          <Text>Quarta-feira, 23 de Outubro às 16h</Text>
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
