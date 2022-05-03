import { Container, ProjectsHomeRoot } from './ProjectsHome.styles'

import { Box } from 'components/Box'
import { Header } from 'components/Header'
import { ProjectsGrid } from './components/ProjectsGrid'
import React from 'react'
import { Spacer } from 'components/Spacer'
import { Text } from 'components/Text'
import projectMock from '../../../../data/keo-seima-mock.json'

export const ProjectsHome = () => {
  const data = [projectMock, projectMock, projectMock, projectMock, projectMock, projectMock]

  return (
    <ProjectsHomeRoot>
      <Header />

      <Container>
        <Box css={{ margin: '0 90px' }}>
          <Text
            as="h3"
            size="heroTitle3"
            family="secondary"
            fontStyle="italic"
            color="neutral-white"
            weight="regular"
          >
            Projects
          </Text>
        </Box>

        <Spacer space="8" direction="column" />

        <Box
          css={{
            margin: '14px 90px',
            backgroundColor: 'white',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProjectsGrid projects={data} />
        </Box>
      </Container>
    </ProjectsHomeRoot>
  )
}
