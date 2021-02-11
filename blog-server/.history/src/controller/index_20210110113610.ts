import { Express, Request, Response } from 'express'
import admin from './setting.controller'
import post from './post.controller'

export default function initController(app: Express) {
    app.use('/admin',admin);
    app.use('/post',post);
}