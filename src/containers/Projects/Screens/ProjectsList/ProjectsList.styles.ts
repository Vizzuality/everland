import { styled } from 'stitches.config'

export const ProjectsListRoot = styled('div', {
  backgroundImage: `url('/images/projects/projects-background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  pb: '$6',
  '@media screen and (max-width: 781px)': {
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  '@bp2': {
    paddingTop: '$18',
  },
})

export const ProjectsListBackground = styled('div', {
  backgroundColor: 'black',
})
