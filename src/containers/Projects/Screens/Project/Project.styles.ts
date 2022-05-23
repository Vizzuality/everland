import { styled } from 'stitches.config'

export const ProjectRoot = styled('div', {
  '@bp2': {
    paddingBottom: '142px',
  },
})

export const Hero = styled('div', {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  maxWidth: '100%',
  backgroundImage: '$$mainPicture',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export const HeroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 100px)',
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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@bp2': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
})

export const IframeContainer = styled('div', {
  width: '100vw',
  height: '582px',

  iframe: {
    width: '100%',
    height: '100%',
  },

  '@bp2': {
    maxWidth: '617px',
  },
})

export const ScrollableText = styled('div', {
  overflow: 'auto',
  marginTop: '$4',

  '@bp2': {
    marginTop: '0',
    maxHeight: '582px',
    maxWidth: '35%',
  },

  '@bp3': {
    maxWidth: '40%',
  },

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

export const Impact = styled('div', {
  position: 'relative',
  backgroundColor: '$neutral-light-beige',
  paddingTop: '$10',
  paddingBottom: '190px',
  px: '$6',
  minHeight: '857px',
  boxShadow: '$2',

  '@bp2': {
    paddingBottom: '$10',
    px: '$10',
    borderRadius: '$7',
  },
  '@bp3': {
    px: '$23',
  },
})

export const InterventionModel = styled('div', {
  py: '$10',

  '@bp2': {
    px: '$10',
  },

  '@bp3': {
    px: '$23',
  },
})

export const VideoPlayIcon = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '$16',
  width: '$16',
  pointerEvents: 'none',
  zIndex: '$1',

  '&:after': {
    transition: 'transform 0.3s ease-out, opacity 0.2s ease-out',
    content: ' ',
    position: 'absolute',
    height: '$19',
    width: '$19',
    left: -8,
    top: -8,
    border: '2px dotted white',
    transform: 'rotateZ(360deg) scale(.5)',
    borderRadius: '$pill',
    opacity: 0,
  },
})

export const VideoContainer = styled('div', {
  position: 'relative',
})

export const VideoOverlay = styled('div', {
  transition: 'opacity 0.3s ease-out',
  opacity: 0,
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0, 0.2)',
  pointerEvents: 'none',
})

export const Video = styled('video', {
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  display: 'block',

  '&:hover ~': {
    [`${VideoPlayIcon}`]: {
      '&:after': {
        transform: 'rotateZ(0deg) scale(1)',
        opacity: 1,
      },
    },

    [`${VideoOverlay}`]: {
      opacity: 1,
    },
  },
})

export const RelatedProjects = styled('div', {
  backgroundImage: `url('/images/projects/discover-background.jpg')`,
  py: '$10',
  paddingBottom: '$5',

  '@bp2': {
    paddingTop: '$16',
    paddingBottom: '$20',
    height: '473px',
  },
})
