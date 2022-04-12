import { styled } from 'stitches.config'

export const ImagesGalleryRoot = styled('div', {
  height: '500px',
  display: 'grid',
  gridTemplateAreas: `"vertical1 horizontal1 vertical2"
                      "vertical1 horizontal2 vertical2"`,
  gridTemplateRows: '250px',
  gridTemplateColumns: '340px 340px 340px',
  gap: '$8',
  overflow: 'auto',
})

export const Test = styled('div', {
  backgroundColor: 'red',
})

export const GalleryBackground = styled('div', {
  backgroundColor: '$neutral-light-beige',
  backgroundImage: 'url(/images/projects/gallery-background.svg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
})
