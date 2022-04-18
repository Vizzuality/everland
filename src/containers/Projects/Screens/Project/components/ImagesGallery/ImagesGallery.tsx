import { Container } from 'containers/components/Container/Container'
import { ImagesGalleryRoot, GalleryBackground, GalleryWrapper } from './ImagesGallery.styles'
import { ImageItem } from '../ImageItem'

export const ImagesGallery = () => {
  return (
    <GalleryBackground>
      <Container>
        <GalleryWrapper>
          <ImagesGalleryRoot>
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-1.jpg"
              gridArea="vertical1"
            />
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-2.jpg"
              gridArea="horizontal1"
            />
            <ImageItem
              title="Women's Empowerment"
              description="Improving the socioeconomic outcomes of women in local communities"
              imageUrl="/images/projects/gallery-3.jpg"
              gridArea="horizontal2"
            />
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-4.jpg"
              gridArea="vertical2"
            />
          </ImagesGalleryRoot>
          <ImagesGalleryRoot>
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-1.jpg"
              gridArea="vertical1"
            />
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-2.jpg"
              gridArea="horizontal1"
            />
            <ImageItem
              title="Women's Empowerment"
              description="Improving the socioeconomic outcomes of women in local communities"
              imageUrl="/images/projects/gallery-3.jpg"
              gridArea="horizontal2"
            />
            <ImageItem
              title="title"
              description="description"
              imageUrl="/images/projects/gallery-4.jpg"
              gridArea="vertical2"
            />
          </ImagesGalleryRoot>
        </GalleryWrapper>
      </Container>
    </GalleryBackground>
  )
}
