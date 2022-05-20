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
import { ProjectSummary } from 'types/Project'

export const ProjectCardItem = ({ id, title, standards, impact, mainPicture }: ProjectSummary) => {
  const router = useRouter()

  const handleClick = () => router.push(`/projects/${id}`)

  return (
    <ProjectCardItemRoot onClick={handleClick}>
      <ImageContainer>
        <Image src={mainPicture} alt={title} layout="fill" objectFit="cover" />
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
        <Text weight="thin">{standards}</Text>
        <Spacer space="3" direction="column" />
        <Text size="subtitle1" weight="bold" css={{ minHeight: '$14', display: 'block' }}>
          {title}
        </Text>
        {impact && impact.length > 0 && (
          <>
            <Spacer space="6" direction="column" />
            {impact.slice(0, 2).map((impactItem) => (
              <>
                <Text key={impactItem.pillar} color="primary-jasper-default">
                  {impactItem}
                </Text>
                <Spacer space={4} direction="row" />
              </>
            ))}
          </>
        )}
      </TextContainer>
    </ProjectCardItemRoot>
  )
}
