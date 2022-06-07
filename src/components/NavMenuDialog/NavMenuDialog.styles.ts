import { styled } from 'stitches.config'

export const NavMenuDialogRoot = styled('div', {
  paddingTop: '$1',
  paddingLeft: '$6',
  paddingRight: '$6',
  position: 'relative',
})

export const MenuDialogItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderBottom: '0.6px solid',
  borderColor: 'rgba(255,255,255, 0.5)',
  '-webkit-tap-highlight-color': 'transparent',
})

export const MenuClick = styled('a', {
  '&:active': {
    backgroundColor: 'rgba(51, 181, 229, 0.4)',
    transition: 'background-color 0.2s ease-in-out',
  },
})

export const MenuCollapsableClick = styled('div', {
  '&:active': {
    backgroundColor: 'rgba(51, 181, 229, 0.4)',
    transition: 'background-color 0.2s ease-in-out',
  },
})

export const MenuDialogItemPill = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '$11',
})

export const MenuContent = styled('div', {
  paddingTop: '15px',
})

export const MenuDialogContentItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
  '&:active': {
    backgroundColor: 'rgba(51, 181, 229, 0.4)',
    transition: 'background-color 0.2s ease-in-out',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',
  size: '$16',
  right: '$5',
  top: '$5',
  backgroundColor: 'transparent',
  margin: 0,
  padding: 0,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
})

export const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',

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

export const IconWrapper = styled('div', {
  paddingTop: '10px',
  paddingLeft: '5px',
})
