import { styled } from 'stitches.config'

export const Hero = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url('/images/projects/hero-background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '$4',
  px: '100px',
  width: '100%',
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

export const Logo = styled('div', {
  height: '42px',
  width: '93px',
  img: {
    width: '100%',
  },
})

export const ScrollDown = styled('div', {
  position: 'relative',
  zIndex: '$1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > svg': {
    transition: 'all 150ms linear',
  },

  '&:hover > svg': {
    transform: 'translateY(8px)',
  },
})

export const SpaceBetween = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const ScrollableText = styled('div', {
  maxHeight: '582px',
  maxWidth: '40%',
  overflow: 'auto',

  /* Scrollbar always visible */
  '&::-webkit-scrollbar': {
    WebkitAppearance: 'none',
    width: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '5px',
    backgroundColor: 'rgba(0,0,0,.5)',
    WebkitBoxShadow: '0 0 1px rgba(255,255,255,.5)',
  },
})
