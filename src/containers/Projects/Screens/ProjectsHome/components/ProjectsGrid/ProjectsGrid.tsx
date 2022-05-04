import { Box } from 'components/Box'
import { ProjectCardItem } from 'containers/Projects/components/ProjectCardItem'

type ProjectsGridProps = {
  projects: any[]
}

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '$3',
        padding: '$3',
        backgroundColor: 'white',
        overflowY: 'auto',
      }}
    >
      {projects.map((project) => (
        <ProjectCardItem
          id={project.id}
          title={project.title}
          location={project.location}
          key={project.id}
        />
      ))}
    </Box>
  )
}
