import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'none',
  gap: '35px',
  margin: 'auto',
  paddingRight: '93px',

  '@bp2': {
    display: 'flex',
  },
})

export const NavItem = styled('div', {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  height: '30px',
  position: 'relative',
})

export const NavDropdown = styled('div', {
  background: 'white',
  position: 'absolute',
  padding: '10px',
  width: '200px',
  borderRadius: '4px',
  top: '30px',
  left: '-10px',
  display: 'flex',
  flexDirection: 'column',
})

export const NavDropdownItem = styled('a', {
  marginBottom: '15px',
  '&:last-child': {
    marginBottom: 0,
  },
})
