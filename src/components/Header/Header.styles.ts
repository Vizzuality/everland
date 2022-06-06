import { styled } from 'stitches.config'

export const HeaderRoot = styled('header', {
  '@bp2': {
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '$4',
  },
  variants: {
    background: {
      scrolled: {
        backgroundColor: 'white',
      },
    },
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
  paddingTop: '$7',
  paddingBottom: '$7',
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
  position: 'absolute',
  right: 20,
  top: 20,

  '&:hover': {
    backgroundColor: '$neutral-dark-beige',
  },

  '@bp2': {
    display: 'none',
  },
})

export const LoginButton = styled('button', {
  display: 'none',
  '@bp2': {
    display: 'block',
    border: '2px solid white',
    borderRadius: '16px',
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    outline: 'none',
    padding: '6px 18px',
  },
  variants: {
    border: {
      scrolled: {
        borderColor: '$primary-jasper-500',
      },
    },
  },
})
