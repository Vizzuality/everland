import { useQuery, UseQueryOptions } from 'react-query'
import { ApiError } from 'types/Api'
import * as KeoSeima from 'data/keo-seima.json'
import * as Kasigau from 'data/kasigau.json'
import * as MaiNdombe from 'data/mai-ndombe.json'
import * as Tumring from 'data/tumring.json'
import * as GuineaBissau from 'data/guinea-bissau.json'
import { ProjectDetail } from 'types/Project'

type Response = ProjectDetail
type Error = ApiError
type Options = UseQueryOptions<Response, Error>

const createKey = (id: string) => ['project', { id }]

const queryFetcher = (id: string) => () => {
  if (id === 'kasigau-id') return Promise.resolve(Kasigau) as unknown as Response
  if (id === 'keo-seima-id') return Promise.resolve(KeoSeima) as unknown as Response
  if (id === 'mai-ndombe-id') return Promise.resolve(MaiNdombe) as unknown as Response
  if (id === 'tumring-id') return Promise.resolve(Tumring) as unknown as Response
  if (id === 'guinea-bissau-id') return Promise.resolve(GuineaBissau) as unknown as Response

  return Promise.resolve(KeoSeima) as unknown as Response
}

export const useFetchProjectDetail = (id: string, options?: Options) => {
  return useQuery<Response, Error>(createKey(id), queryFetcher(id), options)
}
