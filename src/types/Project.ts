import { Impact } from 'containers/Projects/Screens/Project/Project.styles'

export type ValueUnit = {
  value: number
  unit: string
}

export type GalleryItem = {
  alt: string
  src: string
  caption: {
    title: string
    description: string
    link: string
  }
}

export type Location = {
  iso: string
  name: string
  centroid: [number, number]
  geometry: any
}

export type Section = {
  title: string
  description: string
}

export type Impact = {
  pillar: string
  theme: string
  description: string
  photoUrl: any
  title: string
}

export type ProjectSummary = {
  id: string
  slug: string
  title: string
  mainPicture: string
  standards: string
  location: Location
  impact: Impact[]
}

export type ProjectDetail = {
  id: string
  slug: string
  title: string
  subtitle: string
  mainPicture: string
  projectInfo: string
  keyPeople: string
  wildLife: string
  developer: string
  standards: string
  protectedArea: ValueUnit
  co2Avoided: ValueUnit
  embeddedMap: string
  gallery: GalleryItem[]
  video: {
    url: string
    thumbnail: {
      alt: string
      src: string
    }
  }
  location: Location
  interventionModel: {
    title: string
    sections: Section[]
  }
  impact: Impact[]
  relatedProjects: ProjectSummary[]
}
