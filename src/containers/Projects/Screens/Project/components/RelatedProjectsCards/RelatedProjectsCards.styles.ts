import { styled } from 'stitches.config'

export const RelatedProjectsCardsRoot = styled('div', {})

export const CardsWrapper = styled('div', {
  display: 'flex',
  overflow: 'auto',
  gap: '$4',
  paddingLeft: '$4',
  paddingRight: '$4',

  scrollbarWidth: 'none',
  marginBottom: 0,
  paddingBottom: 0,

  '@bp2': {
    paddingLeft: '$16',
    paddingRight: '$16',
  },

  '@bp3': {
    paddingLeft: 'calc((100vw - 1280px) / 2 + $16)',
    paddingRight: 'calc((100vw - 1280px) / 2 + $16)',
  },

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
