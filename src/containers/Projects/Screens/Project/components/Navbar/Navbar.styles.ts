import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { styled } from 'stitches.config'

export const NavbarRoot = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: '$2',
})

export const NavContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const Nav = styled('span', {
  display: 'flex',
  gap: '$2',
  border: '1px solid $primary-jasper-default',
  padding: '$1',
  backgroundColor: '$neutral-light-beige',

  a: {
    transition: 'background-color 0.2s ease-out',
    height: '$7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '$27',
    textTransform: 'uppercase',
    px: '$4',

    '&:hover': {
      backgroundColor: '$primary-jasper-200',
    },
  },
})

export const SectionLink = styled('a', {
  variants: {
    active: {
      true: {
        backgroundColor: '$primary-jasper-200',
      },
    },
  },
})

export const Footer = styled('footer', {
  backgroundColor: '$neutral-white',
  marginTop: '$2',
  boxShadow: '$3',
})

export const FooterContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '$neutral-white',
  maxWidth: '1280px',
  py: '$4',
  margin: 'auto',
})

export const FooterColumn = styled('span', {
  position: 'relative',
  px: '$4',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '& .short': {
    minWidth: '$15',
    maxWidth: '$15',
  },

  '& .large': {
    minWidth: '$18',
    maxWidth: '$18',
  },

  '&:before': {
    content: ' ',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1px',
    height: '100%',
    backgroundColor: '$primary-jasper-default',
    opacity: '0.2',
  },

  '&:first-child:before': {
    content: 'none',
  },
})

export const FooterItem = styled('span', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})

export const FooterIcon = styled(Icon, {
  color: '$primary-jasper-default',
  marginRight: '$4',
})

export const Desktop = styled('div', {
  display: 'none',

  '@bp1': {
    display: 'block',
  },
})

export const Mobile = styled('div', {
  display: 'block',

  '@bp1': {
    display: 'none',
  },
})

export const MobileNav = styled('nav', {
  backgroundColor: '$neutral-white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const NavItem = styled('a', {
  // reset
  padding: 0,
  margin: 0,
  border: 'none',
  backgroundColor: 'transparent',

  minWidth: '92px',
  height: '$15',
  paddingTop: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  flex: 1,
  borderTop: '2px solid $primary-tuna-500',
  color: '$primary-tuna-500',
  cursor: 'pointer',

  variants: {
    isActive: {
      true: {
        backgroundColor: '$primary-jasper-100',
        borderColor: '$primary-jasper-500',
        color: '$primary-jasper-500',

        '& > span': {
          color: '$primary-jasper-500',
        },
      },
    },
  },
})
