import { RelatedProjectsCardItem } from '../RelatedProjectsCardItem'
import { CardsWrapper, RelatedProjectsCardsRoot } from './RelatedProjectsCards.styles'

type Location = {
  iso: string
  name: string
  centroid: number[]
  geometry: unknown
}

export type RelatedProject = {
  title: string
  location: Location
}

type RelatedProjectsProps = {
  relatedProjects: RelatedProject[]
}

export const RelatedProjectsCards = ({ relatedProjects }: RelatedProjectsProps) => {
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
