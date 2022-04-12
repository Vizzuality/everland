import { styled } from 'stitches.config'

export const Container = styled('div', {
  maxWidth: '1280px',
  px: '100px',
  margin: 'auto',

  '@bp1': {
    px: '$5',
  },

  '@bp2': {
    px: '$16',
  },
})
