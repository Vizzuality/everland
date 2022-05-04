import { Container } from 'containers/components/Container/Container'
import { Header } from 'components/Header'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ProjectsHomeRoot } from './ProjectsHome.styles'
import React from 'react'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import projectMock from '../../../../data/keo-seima-mock.json'

export const ProjectsHome = () => {
  const testData = [
    projectMock,
    { ...projectMock, title: 'A Project', id: 'a-project' },
    { ...projectMock, title: 'B Project', id: 'b-project' },
    { ...projectMock, title: 'C Project', id: 'c-project' },
    { ...projectMock, title: 'D Project', id: 'd-project' },
    { ...projectMock, title: 'E Project', id: 'e-project' },
  ]

  return (
    <ProjectsHomeRoot>
      <Header />
      <Spacer space="8" direction="column" />
      <Container>
        <Text as="h3" size="heroTitle3" family="secondary" color="neutral-white" weight="regular">
          Projects
        </Text>
        <Spacer space="15" direction="column" />
        <ProjectsGrid projects={testData} />
      </Container>
    </ProjectsHomeRoot>
  )
}
