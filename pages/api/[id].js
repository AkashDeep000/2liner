import { connectToDatabase } from "../../util/mongodb";


export default async (req, res) => {
  const { id } = req.query
  const skiper = (Number(id)-1)*5;
  const { db } = await connectToDatabase();
  const status = await db.collection('status')
                .find({})
                .skip(skiper)
                .limit(5)
                .toArray();
                
           res.setHeader('Cache-Control', 's-maxage=86400')
           res.status(200).json({data : status})
          }