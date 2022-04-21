import type { NextApiRequest, NextApiResponse } from 'next'
import MockData from 'data/keo-seima-mock.json'

const mockKeoSeima = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(MockData)
}

export default mockKeoSeima
