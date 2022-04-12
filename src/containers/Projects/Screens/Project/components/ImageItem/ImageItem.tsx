import Image from 'next/image'
import { ImageItemRoot, HoverItem } from './ImageItem.styles'
import { Overlay } from 'components/Overlay/Overlay.styles'
import { Text } from 'components/Text'

type ImageItemProps = {
  imageUrl: string
  title: string
  description: string
  gridArea: string
}

export const ImageItem = ({ imageUrl, title, description, gridArea }: ImageItemProps) => {
  return (
    <ImageItemRoot className="imageItem" css={{ gridArea }}>
      <Overlay variant="galleryItem" className="overlay" />
      <Image src={imageUrl} alt={title} layout="fill" />
      <HoverItem className="hover-item">
        <Text size="body" family="secondary" fontStyle="italic" color="neutral-white">
          {title}
        </Text>
        <Text size="body" family="primary" weight="bold" color="neutral-white">
          {description}
        </Text>
      </HoverItem>
    </ImageItemRoot>
  )
}
