import React, { ComponentProps, ReactNode } from 'react'
import { DialogPortal, Root, Trigger } from '@radix-ui/react-dialog'
import { Overlay, Content, CloseButton } from './Dialog.styles'
import { Icon } from 'components/Icon'

type DialogOwnProps = ComponentProps<typeof Content>
export type DialogProps = DialogOwnProps & {
  trigger?: ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export const Dialog = ({
  children,
  open,
  trigger,
  onOpenChange,
  defaultOpen = false,
  fullscreen,
  ...props
}: DialogProps) => {
  return (
    <Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Overlay />
      <DialogPortal>
        <Content fullscreen {...props}>
          {!fullscreen && (
            <CloseButton>
              <Icon color="neutral-light-beige" name="close" />
            </CloseButton>
          )}
          {children}
        </Content>
      </DialogPortal>
    </Root>
  )
}

Dialog.displayName = 'Dialog'
