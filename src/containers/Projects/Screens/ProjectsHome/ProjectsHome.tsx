import { Container } from 'containers/components/Container/Container'
import { Header } from 'components/Header'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ProjectsHomeRoot } from './ProjectsHome.styles'
import React from 'react'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import projectMock from '../../../../data/keo-seima-mock.json'

export const ProjectsHome = () => {
  const data = [projectMock, projectMock, projectMock, projectMock, projectMock, projectMock]

  return (
    <ProjectsHomeRoot>
      <Header />

      <Spacer space="8" direction="column" />

      <Container>
        <Text as="h3" size="heroTitle3" family="secondary" color="neutral-white" weight="regular">
          Projects
        </Text>

        <Spacer space="8" direction="column" />

        <ProjectsGrid projects={data} />
      </Container>
    </ProjectsHomeRoot>
  )
}
