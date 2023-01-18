// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id:string
  name: string
  surname: string
  mail: string
  date: string
  phoneNumber: string
  address: string
  profile: string
  mentorCode: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    surname: "testNom",
    id: "818eaaea-7e91-4c98-8b11-d29411ae21fc" ,
    name: "test",
    mail: "test@gmail.com",
    date: "10/01/2023",
    phoneNumber: "+33750440990",
    address: "10 rue de la fête",
    profile: "client",
    mentorCode: "818eaaea-7e91-4c98-8b11-d29411ae21fc"
  })
}
