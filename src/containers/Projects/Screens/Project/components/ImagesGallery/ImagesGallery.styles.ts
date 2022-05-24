import { styled } from 'stitches.config'

export const ImagesGalleryRoot = styled('div', {
  height: '500px',
  display: 'grid',
  gridTemplateAreas: `"vertical1 horizontal1 vertical2"
                      "vertical1 horizontal2 vertical2"`,
  gridTemplateRows: '250px',
  gridTemplateColumns: '340px 340px 340px',
  gap: '$8',
})

export const GalleryBackground = styled('div', {
  backgroundImage:
    'url(/images/projects/gallery-background.svg), linear-gradient(180deg, #FFFFFF 0%, $colors$primary-jasper-100 50%, #FFFFFF 100%)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
})

export const GalleryWrapper = styled('div', {
  display: 'flex',
  overflowX: 'auto',
  cursor: 'grab',
  gap: '$8',

  '&.dragging': {
    cursor: 'grabbing',
  },
})
