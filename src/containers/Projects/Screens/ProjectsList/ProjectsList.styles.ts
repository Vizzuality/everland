import { styled } from 'stitches.config'

export const ProjectsListRoot = styled('div', {
  backgroundImage: `url('/images/projects/projects-background.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  pb: '$6',

  '@media screen and (max-width: 730px)': {
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
})

export const ProjectsListBackground = styled('div', {
  backgroundColor: 'black',
})
