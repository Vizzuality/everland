import {
  ImageContainer,
  Location,
  ProjectCardItemRoot,
  TextContainer,
} from './ProjectCardItem.styles'

import { Icon } from 'components/Icon'
import Image from 'next/image'
import { Project } from 'containers/Projects/models/Project'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { useRouter } from 'next/router'

export const ProjectCardItem = ({ id, title, location }: Project) => {
  const router = useRouter()

  const { iso } = location

  const handleClick = () => router.push(`/projects/${id}`)

  return (
    <ProjectCardItemRoot onClick={handleClick}>
      <ImageContainer>
        <Image
          src={`/images/projects/discover-card-1.jpg`}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
        <Location>
          <Icon name="marker" size={6} color="neutral-white" />
          <Spacer space="3" direction="row" />
          <Text size="body1" family="secondary" fontStyle="italic" color="neutral-white">
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
    </ProjectCardItemRoot>
  )
}
