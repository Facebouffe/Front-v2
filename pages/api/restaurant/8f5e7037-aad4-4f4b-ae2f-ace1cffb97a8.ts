// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id:string
    name: string
    address: string
    rate: number
    like: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        id: "8f5e7037-aad4-4f4b-ae2f-ace1cffb97a8",
        name: "Burger King",
        address: "163 rue constant evrard",
        rate: 4.5,
        like: 937
    })
}
