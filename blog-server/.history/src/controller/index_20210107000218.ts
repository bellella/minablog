import { Express, Request, Response } from 'express'
import admin from './admin'
import post from './post'

export function initRoutes(app: Express) {
    app.use('/admin',admin);
    app.use('/post',post);
}