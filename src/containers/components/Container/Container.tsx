import { styled } from 'stitches.config'

export const Container = styled('div', {
  maxWidth: '1280px',
  margin: 'auto',
  px: '$5',

  '@bp1': {
    px: '100px',
  },

  '@bp2': {
    px: '$16',
  },
})
