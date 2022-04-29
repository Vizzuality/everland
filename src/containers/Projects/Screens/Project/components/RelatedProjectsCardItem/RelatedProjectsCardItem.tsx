import { Icon } from 'components/Icon'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import Image from 'next/image'
import { RelatedProject } from '../RelatedProjectsCards/RelatedProjectsCards'
import {
  ImageContainer,
  RelatedProjectsCardItemRoot,
  Location,
  TextContainer,
} from './RelatedProjectsCardItem.styles'

export const RelatedProjectsCardItem = ({ title, location }: RelatedProject) => {
  const { iso } = location
  return (
    <RelatedProjectsCardItemRoot>
      <ImageContainer>
        <Image src={`/images/projects/discover-card-1.jpg`} alt={title} height={173} width={353} />
        <Location>
          <Icon name="marker" size={6} color="neutral-white" />
          <Spacer space="3" direction="row" />
          <Text size="body" family="secondary" fontStyle="italic" color="neutral-white">
            {title}
          </Text>
        </Location>
      </ImageContainer>
      <TextContainer>
        <Text>Standards: </Text>
        <Text weight="thin">{iso}</Text>
        <Spacer space="3" direction="column" />
        <Text size="subtitle1" weight="bold">
          {title}
        </Text>
      </TextContainer>
    </RelatedProjectsCardItemRoot>
  )
}
