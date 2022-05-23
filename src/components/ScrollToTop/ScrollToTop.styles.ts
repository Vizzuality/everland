import { styled } from '@stitches/react'

export const ScrollToTopButton = styled('button', {
  margin: 0,
  padding: 0,
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: 'auto',
  color: '$primary-jasper-300',

  variants: {
    isWhite: {
      true: {
        color: '$neutral-white',
      },
    },
  },
})
