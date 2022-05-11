import { useQuery, UseQueryOptions } from 'react-query'
import { ApiError } from 'types/Api'
import * as ImpactTreeData from 'data/impact-tree.json'

export type ImpactTreeChildren = {
  id: string
  slug: string
  title: string
}

export type ImpactTree = {
  id: string
  slug: string
  title: string
  children: ImpactTreeChildren[]
}

type Response = {
  data: ImpactTree[]
}
type Error = ApiError
type Options = UseQueryOptions<Response, Error>

const createKey = () => 'impact-tree'

const queryFetcher = () => () => {
  return Promise.resolve(ImpactTreeData) as unknown as Response
}

export const useFetchImpactTree = (options?: Options) => {
  return useQuery<Response, Error>(createKey(), queryFetcher(), options)
}
