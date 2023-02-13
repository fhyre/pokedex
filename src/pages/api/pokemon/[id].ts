import { getPokemon } from "@/features/pokemon";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getPokeById(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { id } = req.query;

  const temp = await getPokemon(id as string);

  res.status(200).json(temp);
}
