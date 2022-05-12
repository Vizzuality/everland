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
  height: '100px',
  nav: {
    display: 'flex',
    gap: '35px',
    margin: 'auto',
    paddingRight: '93px',
  },
})
