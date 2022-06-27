import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
      res.status(200).json( {name: 'Home API route'})
  }
  
export default handler