import { styled } from 'stitches.config'

export const ProjectsGridRoot = styled('div')

export const SortButton = styled('button', {
  // Reset
  appearance: 'none',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'inherit',

  height: '$8',
  width: '$8',
  mx: '$1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        backgroundColor: 'rgba(255, 249, 237, 0.5)',
      },
    },
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 353px)',
  gap: '$3',
  padding: '$3',
  overflowY: 'auto',
  placeContent: 'center',

  '@media screen and (max-width: 781px)': {
    padding: '$1',
    gap: '$15',
    backgroundColor: 'white',
  },
})

export const GridContainer = styled('div', {
  margin: 'auto',
  backgroundColor: 'white',

  '@media screen and (max-width: 781px)': {
    backgroundColor: 'transparent',
  },

  '@media screen and (min-width: 1156px)': {
    maxWidth: '1280px',
  },
})

export const SortingContainer = styled('div', {
  marginBottom: '$2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'ceflter',
})
