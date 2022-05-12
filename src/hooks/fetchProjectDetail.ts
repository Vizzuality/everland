import { useQuery, UseQueryOptions } from 'react-query'
import { ApiError } from 'types/Api'
import * as KeoSeima from 'data/keo-seima-mock.json'
import { ProjectDetail } from 'types/Project'

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
