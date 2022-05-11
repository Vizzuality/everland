import { useQuery, UseQueryOptions } from 'react-query'
import { ApiError } from 'types/Api'
import * as KeoSeima from 'data/keo-seima-mock.json'

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
  title: string
  location: {
    iso: string
    name: string
    centroid: [number, number]
    geometry: any
  }
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
  location: {
    iso: string
    name: string
    centroid: [number, number]
    geometry: any
  }
  interventionModel: {
    title: string
    sections: Section[]
  }
  impact: Impact[]
  relatedProjects: ProjectSummary[]
}

type Response = ProjectDetail
type Error = ApiError
type Options = UseQueryOptions<Response, Error>

const createKey = () => 'project'

const queryFetcher = () => () => {
  return Promise.resolve(KeoSeima) as unknown as ProjectDetail
}

export const useFetchProjectDetail = (options?: Options) => {
  return useQuery<Response, Error>(createKey(), queryFetcher(), options)
}
