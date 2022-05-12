import { Container } from 'containers/components/Container/Container'
import { Header } from 'components/Header'
import { ProjectsGrid } from './components/ProjectsGrid'
import { ProjectsListRoot } from './ProjectsList.styles'
import React from 'react'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import { useFetchProjectsList } from 'hooks/fetchProjectsList'

export const ProjectsList = () => {
  const { data: projectsList, status } = useFetchProjectsList()

  if (status === 'loading') return null // TODO: return loader

  return (
    <ProjectsListRoot>
      <Header />
      <Spacer space="8" direction="column" />
      <Container>
        <Text as="h3" size="heroTitle3" family="secondary" color="neutral-white" weight="regular">
          Projects
        </Text>
        <Spacer space="15" direction="column" />
        <ProjectsGrid projects={projectsList} />
      </Container>
    </ProjectsListRoot>
  )
}
