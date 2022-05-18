import * as RadixDialog from '@radix-ui/react-dialog'
import { styled, keyframes } from 'stitches.config'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 0.4 },
})

const fadeOut = keyframes({
  from: { opacity: 0.4 },
  to: { opacity: 0 },
})

const appear = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
})

export const Overlay = styled(RadixDialog.Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'black',
  opacity: 0.5,

  '&[data-state=open]': {
    animation: `${fadeIn} 300ms ease-out`,
  },

  '&[data-state=close]': {
    animation: `${fadeOut} 300ms ease-out`,
  },
})

export const Content = styled(RadixDialog.Content, {
  position: 'fixed',
  padding: '$4 $3',
  zIndex: '$2',

  backgroundColor: '$accent-white',
  borderRadius: '$2',
  overflowY: 'auto',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${appear} 300ms ease-out`,
  },

  variants: {
    fullscreen: {
      true: {
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
        padding: 0,
      },
      false: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 200,
        maxWidth: 'fit-content',
        maxHeight: '85vh',
      },
    },
  },
  defaultVariants: {
    fullscreen: false,
  },
})

export const CloseButton = styled(RadixDialog.Close, {
  position: 'absolute',
  top: '0',
  right: '0',
  padding: '$2',
  border: 'none',
  background: 'none',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
    color: '$primary-500',
  },
})
