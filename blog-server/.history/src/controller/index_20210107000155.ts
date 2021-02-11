import { Express, Request, Response } from 'express'
import admin from './admin'

export function initRoutes(app: Express) {
    app.use('/admin',admin);
    app.use('/post',admin);
}