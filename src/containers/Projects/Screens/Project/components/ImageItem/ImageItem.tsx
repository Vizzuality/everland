import Image from 'next/image'
import { ImageItemRoot, HoverItem, Description, Title } from './ImageItem.styles'
import { Overlay } from 'components/Overlay/Overlay.styles'

type ImageItemProps = {
  imageUrl: string
  title: string
  description: string
  gridArea: string
}

export const ImageItem = ({ imageUrl, title, description, gridArea }: ImageItemProps) => {
  return (
    <ImageItemRoot className="imageItem" css={{ gridArea }}>
      <Image src={imageUrl} alt={title} layout="fill" />
      <Overlay variant="galleryItem" className="overlay" />
      <HoverItem className="hover-item">
        <Title size="body1" family="secondary" fontStyle="italic" color="neutral-white">
          {title}
        </Title>
        <Description size="body1" family="primary" weight="bold" color="neutral-white">
          {description}
        </Description>
      </HoverItem>
    </ImageItemRoot>
  )
}
