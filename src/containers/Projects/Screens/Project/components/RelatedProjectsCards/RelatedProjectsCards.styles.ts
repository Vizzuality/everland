import { styled } from 'stitches.config'

export const RelatedProjectsCardsRoot = styled('div', {})

export const CardsWrapper = styled('div', {
  display: 'flex',
  overflow: 'auto',
  gap: '$4',
  paddingLeft: 'calc((100vw - 1280px) / 2 + $16)',
  paddingRight: 'calc((100vw - 1280px) / 2 + $16)',

  scrollbarWidth: 'none',
  marginBottom: 0,
  paddingBottom: 0,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})
