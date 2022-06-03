import { styled } from 'stitches.config'

export const Nav = styled('nav', {
  display: 'none',
  gap: '35px',
  margin: 'auto',
  paddingRight: '93px',

  '@bp2': {
    display: 'flex',
  },
})
