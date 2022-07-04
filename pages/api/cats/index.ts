import type { NextApiRequest, NextApiResponse } from 'next'
import { getCats } from '../../../data'

type Data = {
    name: string
    phone: string
    email: string
    image: {
      url: string,
      alt: string
    }
    id: number
    favoured: boolean,
    description: string,
    color: string,
    gender: string    
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(getCats)
}
