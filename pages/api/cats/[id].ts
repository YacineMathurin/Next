import type { NextApiRequest, NextApiResponse } from "next";
import { getCats } from "../../../data";

type Data = {};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const cat = getCats.filter(cat => cat.id === Number(id))
  res.status(200).json({ cat });
}
