import { styled } from 'stitches.config'

export const getGridByElementsNumber = (length: number) => {
  if (length === 1) return oneElementsGrid
  if (length === 2) return twoElementsGrid
  if (length === 3) return threeElementsGrid
  if (length === 4) return fullGrid
}

const fullGrid = {
  gridTemplateAreas: `"vertical1 horizontal1 vertical2"
                      "vertical1 horizontal2 vertical2"`,
  gridTemplateColumns: '340px 340px 340px',
}

const threeElementsGrid = {
  gridTemplateAreas: `"vertical1 horizontal1"
                      "vertical1 horizontal2"`,
  gridTemplateColumns: '340px 340px',
}

const twoElementsGrid = {
  gridTemplateAreas: `"vertical1 horizontal1"
                      "vertical1 ."`,
  gridTemplateColumns: '340px 340px',
}

const oneElementsGrid = {
  gridTemplateAreas: `"vertical1"
                      "vertical1"`,
  gridTemplateColumns: '340px',
}

export const ImagesGalleryRoot = styled('div', fullGrid, {
  height: '500px',
  display: 'grid',
  gridTemplateRows: '250px',
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
