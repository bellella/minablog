import { Express, Request, Response } from 'express'
import admin from './admin'

export function initRoutes(app: Express) {
  
    app.get('/api', (req: Request, res: Response) => res.status(200).send({
      message: 'server is running!'
    }))
    app.use('/admin',admin);
    app.use('/post',admin);

}