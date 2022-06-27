import { styled } from 'stitches.config'

export const HeaderRoot = styled('header', {
  variants: {
    scrolled: {
      true: {
        backgroundColor: 'white',
      },
    },
    fixed: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: '$4',
        width: '100%',
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
  backgroundColor: 'transparent',
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
    scrolled: {
      true: {
        borderColor: '$primary-jasper-500',
      },
    },
  },
})

export const IconMenu = styled('div', {
  borderTop: '1px solid white',
  borderBottom: '1px solid white',
  height: '10px',
  width: '30px',
  variants: {
    scrolled: {
      true: {
        borderColor: '$primary-jasper-500',
        borderWidth: '2px',
      },
    },
  },
})

export const LogoImage = styled('img', {})
