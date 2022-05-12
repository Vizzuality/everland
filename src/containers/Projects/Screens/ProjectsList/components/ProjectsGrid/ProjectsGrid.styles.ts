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
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$3',
  padding: '$3',
  backgroundColor: 'white',
  overflowY: 'auto',
})

export const SortingContainer = styled('div', {
  marginBottom: '$2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
