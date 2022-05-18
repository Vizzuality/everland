import { styled } from 'stitches.config'

export const NavMenuDialogRoot = styled('div', {
  paddingTop: '$12',
  paddingLeft: '$15',
  position: 'relative',
})

export const CloseButton = styled('button', {
  position: 'absolute',
  size: '$16',
  right: '$5',
  top: '$12',
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
  border: '2px solid $neutral-light-beige',
  cursor: 'pointer',
})

export const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$15',
  marginTop: '164px',

  '& > *': {
    cursor: 'pointer',
  },
})

export const Desktop = styled('div', {
  display: 'block',

  '@bp2': {
    display: 'none',
  },
})
