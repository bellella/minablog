import { Express, Request, Response } from 'express'
import admin from './setting.controller'
import post from './post.controller'

export default function initController(app: Express) {
    app.use('/api/admin',admin);
    app.use('/api/post',post);
}