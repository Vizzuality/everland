import { styled } from 'stitches.config'

export const ProjectCardItemRoot = styled('a', {
  cursor: 'pointer',
  maxWidth: '373px',
  height: '284px',
  backgroundColor: '$neutral-white',
  padding: '$3',
  flexShrink: 0,
})

export const ImageContainer = styled('div', {
  position: 'relative',
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
