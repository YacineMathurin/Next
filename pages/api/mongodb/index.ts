import { connectToDatabase } from "../../../util/mongodb";

export default async (req: any, res: any) => {
    const { db } = await connectToDatabase();
  
    const articles = await db
      .collection("articles")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    res.json(articles);
};