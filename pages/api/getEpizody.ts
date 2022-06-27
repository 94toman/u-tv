import { NextApiRequest, NextApiResponse } from 'next'



export default async function getEpizody (params) {
  console.log('test', params)
}



/*
export default async function handler(req, res) {
  try{
     const data = await fetch(`https://data.zaktv.cz/` , {param: req.body.param}, headers)
      res.status(200).json(data)
   } catch (error: any) {
      console.error(error)
      res.status(error.status || 500).end(error.message)
    }


const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
*/