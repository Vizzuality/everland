import { Text } from 'components/Text'
import { styled } from 'stitches.config'

export const Title = styled(Text, {
  transition: 'opacity .2s ease-out .1s, transform .2s ease-out .1s',
  transform: 'translateY(20px)',
  opacity: 0,
})

export const Description = styled(Text, {
  transition: 'opacity .2s ease-out .15s, transform .2s ease-out .15s',
  transform: 'translateY(20px)',
  opacity: 0,

  '& > .italic': {
    fontStyle: 'italic',
  },
})

export const HoverItem = styled('div', {
  transition: 'opacity .15s ease-out',
  opacity: 0,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$5 $7',
})

export const ImageItemRoot = styled('div', {
  position: 'relative',
  zIndex: '$1',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  '& img': {
    pointerEvents: 'none',
  },

  [`& .overlay`]: {
    transition: 'opacity .15s ease-out',
    opacity: 0,
  },

  '&:hover': {
    [`& .overlay, & .hover-item`]: {
      opacity: 1,
    },

    [`& .hover-item`]: {
      transform: 'translateY(0)',
      [`${Title}, ${Description}`]: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
  },
})
