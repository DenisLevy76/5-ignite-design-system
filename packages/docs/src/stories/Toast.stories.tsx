import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { useRef, useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {},
  decorators: [
    (Story) => {
      const [open, setOpen] = useState<boolean>(false)
      const timerRef = useRef(0)

      return (
        <>
          <Button
            onClick={() => {
              setOpen(false)
              window.clearTimeout(timerRef.current)
              timerRef.current = window.setTimeout(() => {
                setOpen(true)
              }, 100)
            }}
          >
            Open toast
          </Button>
          {Story({
            args: { open, onOpenChange: setOpen },
          })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {}
