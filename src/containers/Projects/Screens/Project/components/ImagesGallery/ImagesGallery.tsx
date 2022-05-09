import { Container } from 'containers/components/Container/Container'
import { ImagesGalleryRoot, GalleryBackground, GalleryWrapper } from './ImagesGallery.styles'
import { ImageItem } from '../ImageItem'
import { GalleryItem } from 'hooks/fetchProjectDetail'

type ImagesGalleryProps = {
  gallery: GalleryItem[]
}

export const ImagesGallery = ({ gallery }: ImagesGalleryProps) => {
  const gridAreaMapper = (index: number) => {
    if (index === 0) return 'vertical1'
    if (index === 1) return 'horizontal1'
    if (index === 2) return 'horizontal2'
    if (index === 3) return 'vertical2'
  }

  return (
    <GalleryBackground>
      <Container>
        <GalleryWrapper>
          <ImagesGalleryRoot>
            {gallery.slice(0, 4).map((galleryItem, index) => {
              return (
                <ImageItem
                  title={galleryItem.caption.title}
                  description={galleryItem.caption.description}
                  imageUrl={galleryItem.src}
                  alt={galleryItem.alt}
                  gridArea={gridAreaMapper(index)}
                  key={galleryItem.caption.title}
                />
              )
            })}
          </ImagesGalleryRoot>
          <ImagesGalleryRoot>
            {gallery.slice(4, 8).map((galleryItem, index) => {
              return (
                <ImageItem
                  title={galleryItem.caption.title}
                  description={galleryItem.caption.description}
                  imageUrl={galleryItem.src}
                  alt={galleryItem.alt}
                  gridArea={gridAreaMapper(index)}
                  key={galleryItem.caption.title}
                />
              )
            })}
          </ImagesGalleryRoot>
        </GalleryWrapper>
      </Container>
    </GalleryBackground>
  )
}
