import { styled } from 'stitches.config'

export const RelatedProjectsCardItemRoot = styled('a', {
  cursor: 'pointer',
  width: '278px',
  minHeight: '284px',
  backgroundColor: '$neutral-white',
  padding: '$3',
  flexShrink: 0,

  '@bp2': {
    width: '373px',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '258px',
  height: '173px',

  '@bp2': {
    width: '353px',
  },
})

export const Location = styled('div', {
  position: 'absolute',
  bottom: '$5',
  left: '$5',

  display: 'flex',
  alignItems: 'center',
})

export const TextContainer = styled('div', {
  padding: '$3',
})

export const RelatedProjectImage = styled('img', {
  height: '100%',
  objectFit: 'cover',
  width: '100%',
})
