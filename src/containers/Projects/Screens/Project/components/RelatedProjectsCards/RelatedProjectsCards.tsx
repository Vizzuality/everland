import { ProjectSummary } from 'types/Project'
import { RelatedProjectsCardItem } from '../RelatedProjectsCardItem'
import { CardsWrapper, RelatedProjectsCardsRoot } from './RelatedProjectsCards.styles'

type RelatedProjectsProps = {
  relatedProjects: ProjectSummary[]
}

export const RelatedProjectsCards = ({ relatedProjects }: RelatedProjectsProps) => {
  console.log(relatedProjects)
  return (
    <RelatedProjectsCardsRoot>
      <CardsWrapper>
        {relatedProjects.map((relatedProject) => (
          <RelatedProjectsCardItem key={relatedProject.title} {...relatedProject} />
        ))}
      </CardsWrapper>
    </RelatedProjectsCardsRoot>
  )
}
