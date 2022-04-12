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

  background: `
    /* Shadow Cover TOP */
    linear-gradient(
      white 30%,
      rgba(255, 255, 255, 0)
    ) center top,
    
    /* Shadow Cover BOTTOM */
    linear-gradient(
      rgba(255, 255, 255, 0), 
      white 70%
    ) center bottom,
    
    /* Shadow TOP */
    radial-gradient(
      farthest-side at 50% 0,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    ) center top,
    
    /* Shadow BOTTOM */
    radial-gradient(
      farthest-side at 50% 100%,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    ) center bottom`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
  backgroundAttachment: 'local, local, scroll, scroll',
})
