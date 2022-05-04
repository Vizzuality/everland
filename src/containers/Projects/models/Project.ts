type Location = {
  iso: string
  name: string
  centroid: number[]
  geometry: unknown
}

export type Project = {
  id: string
  title: string
  location: Location
  hashtags?: string[]
}
