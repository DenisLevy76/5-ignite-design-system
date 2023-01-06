import { ComponentProps } from 'react'
import { ToastContainer } from './Toast.styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
}
