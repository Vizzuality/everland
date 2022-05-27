import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectSummary } from 'types/Project'
import {
  ImageContainer,
  RelatedProjectsCardItemRoot,
  Location,
  TextContainer,
} from './RelatedProjectsCardItem.styles'

export const RelatedProjectsCardItem = ({
  id,
  title,
  location,
  mainPicture,
  standards,
}: ProjectSummary) => {
  return (
    <Link href={`/projects/${id}`} passHref>
      <RelatedProjectsCardItemRoot>
        <ImageContainer>
          {mainPicture && <Image src={mainPicture} alt={title} layout="fill" objectFit="cover" />}
          <Location>
            <Icon name="marker" size={6} color="neutral-white" />
            <Spacer space="3" direction="row" />
            <Text size="body1" family="secondary" fontStyle="italic" color="neutral-white">
              {location.name}
            </Text>
          </Location>
        </ImageContainer>
        <TextContainer>
          <Text>Standards: </Text>
          <Text weight="thin">{standards}</Text>
          <Spacer space="3" direction="column" />
          <Text size="subtitle1" weight="bold">
            {title}
          </Text>
        </TextContainer>
      </RelatedProjectsCardItemRoot>
    </Link>
  )
}
