import { Express, Request, Response } from 'express'

export function routes(app: Express) {
    app.get('/',(req : Request , res : Response) => {
        res.send('??')
        console.log('kyuyuyu')
    })
  }