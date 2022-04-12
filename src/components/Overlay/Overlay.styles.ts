import { styled } from 'stitches.config'

export const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,

  variants: {
    variant: {
      hero: {
        background: 'linear-gradient(transparent, transparent, transparent, rgba(0, 0, 0, 0.5))',
      },
      galleryItem: {
        top: 'auto',
        height: '128px',
        background: `linear-gradient(
          rgba(196, 196, 196, 0),
          rgba(196, 196, 196, 0.3),
          rgba(54, 56, 68, 1)
        )`,
      },
    },
  },
})
