import { styled } from 'stitches.config'

export const Container = styled('div', {
  maxWidth: '1280px',
  px: '100px',
  margin: 'auto',
  '@bp2': {
    px: '$16',
  },
  '@bp1': {
    px: '$5',
  },
})
