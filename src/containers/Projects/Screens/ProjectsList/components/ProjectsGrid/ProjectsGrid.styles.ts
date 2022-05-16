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
  gridTemplateColumns: 'repeat(auto-fill, 327px)',
  gap: '$3',
  padding: '$3',
  overflowY: 'auto',

  '@media screen and (max-width: 730px)': {
    padding: '$2',
    gap: '$20',
  },
})

export const GridContainer = styled('div', {
  margin: 'auto',
  backgroundColor: 'white',

  '@media screen and (max-width: 730px)': {
    maxWidth: '343px',
  },

  '@media screen and (min-width: 730px)': {
    maxWidth: '690px',
  },

  '@media screen and (min-width: 1156px)': {
    maxWidth: '1030px',
  },
})

export const SortingContainer = styled('div', {
  marginBottom: '$2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
