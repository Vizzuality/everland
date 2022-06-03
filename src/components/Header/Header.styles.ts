import { styled } from 'stitches.config'

export const HeaderRoot = styled('header', {
  width: '100%',
  position: 'relative',
  zIndex: 10,

  variants: {
    fixed: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '$4',
      },
    },
  },
})

export const HeaderContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '$12',
})

export const Menu = styled('button', {
  size: '$16',
  backgroundColor: '$neutral-light-beige',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  margin: 0,
  padding: 0,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$neutral-dark-beige',
  },

  '@bp2': {
    display: 'none',
  },
})
