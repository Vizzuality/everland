import { useQuery, UseQueryOptions } from 'react-query'
import { ApiError } from 'types/Api'
import Projects from 'data/projects.json'
import { ProjectSummary } from 'types/Project'

type Response = ProjectSummary[]
type Error = ApiError
type Options = UseQueryOptions<Response, Error>

const createKey = () => 'projects-list'

const orderedProjects = Projects.sort((a, b) => {
  return a.order - b.order
})
const queryFetcher = () => () => {
  return Promise.resolve(orderedProjects) as unknown as Response
}
export const useFetchProjectsList = (options?: Options) => {
  return useQuery<Response, Error>(createKey(), queryFetcher(), options)
}
