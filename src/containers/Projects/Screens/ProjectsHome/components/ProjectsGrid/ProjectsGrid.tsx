import { Grid, SortButton, SortingContainer } from './ProjectsGrid.styles'
import React, { useMemo, useState } from 'react'

import { Icon } from 'components/Icon'
import { ProjectCardItem } from 'containers/Projects/components/ProjectCardItem'
import { Text } from 'components/Text'

enum Sorting {
  ASC = 'asc',
  DESC = 'desc',
}

type ProjectsGridProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projects: Record<string, any>[]
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [sorting, setSorting] = useState<Sorting>(Sorting.DESC)

  const sortedProjects = useMemo(() => {
    return projects.sort((a, b) => {
      if (sorting === Sorting.ASC) {
        return b.title.localeCompare(a.title)
      }

      return a.title.localeCompare(b.title)
    })
  }, [sorting, projects])

  return (
    <>
      <SortingContainer>
        <Text family="primary" size="body1" weight="regular" color="neutral-white">
          Sort:
        </Text>

        <SortButton active={sorting === Sorting.DESC} onClick={() => setSorting(Sorting.DESC)}>
          <Icon name="sort-down" size="7" />
        </SortButton>

        <SortButton active={sorting === Sorting.ASC} onClick={() => setSorting(Sorting.ASC)}>
          <Icon name="sort-up" size="7" />
        </SortButton>
      </SortingContainer>
      <Grid>
        {sortedProjects.map((project) => (
          <ProjectCardItem
            id={project.id}
            title={project.title}
            location={project.location}
            hashtags={['theme1', 'theme2']}
            key={project.id}
          />
        ))}
      </Grid>
    </>
  )
}
