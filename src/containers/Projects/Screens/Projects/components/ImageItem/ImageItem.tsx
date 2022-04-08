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
    <ImageItemRoot css={{ gridArea }}>
      <Overlay />
      <Image src={imageUrl} alt={title} layout="fill" />
      <HoverItem>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </HoverItem>
    </ImageItemRoot>
  )
}
