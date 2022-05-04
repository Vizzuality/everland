import { styled } from 'stitches.config'

export const ProjectCardItemRoot = styled('a', {
  cursor: 'pointer',
  height: '284px',
  backgroundColor: '$neutral-white',
  flexShrink: 0,
})

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '173px',
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
