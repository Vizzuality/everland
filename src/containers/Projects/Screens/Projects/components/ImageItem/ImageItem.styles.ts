import { Overlay } from 'components/Overlay/Overlay.styles'
import { styled } from 'stitches.config'

export const HoverItem = styled('div', {})

export const ImageItemRoot = styled('div', {
  position: 'relative',
  transition: 'all 150ms ease-out',

  [`& ${Overlay}, & ${HoverItem}`]: {
    opacity: 0,
  },

  '&:hover': {
    [`& ${Overlay}, & ${HoverItem}`]: {
      opacity: 1,
    },
  },
})
