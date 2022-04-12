import { styled } from 'stitches.config'

export const HoverItem = styled('div', {
  position: 'relative',
  zIndex: '$2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$5 $7',
})

export const ImageItemRoot = styled('div', {
  transition: 'all 150ms ease-out',
  position: 'relative',
  zIndex: '$1',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  [`& .overlay, & .hover-item`]: {
    opacity: 0,
    zIndex: '$1',
  },

  '&:hover': {
    [`& .overlay, & .hover-item`]: {
      opacity: 1,
    },
  },
})
