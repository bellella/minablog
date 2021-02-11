import { Express, Request, Response } from 'express'
import * as express from 'express'
import * as PostController from '../controller/admin.controller';

export function initRoutes(app: Express) {
  
    app.get('/api', (req: Request, res: Response) => res.status(200).send({
      message: 'server is running!'
    }))
    app.use('/admin',PostController.router);
  }