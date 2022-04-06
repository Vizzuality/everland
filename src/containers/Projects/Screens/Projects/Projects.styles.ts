import { styled } from 'stitches.config'
export const ProjectsRoot = styled('div', {})

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

  '&::before': {
    content: ' ',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
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
