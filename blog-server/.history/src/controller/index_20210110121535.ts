import { Express, Request, Response } from 'express'
import setting from './setting.controller'
import post from './post.controller'

export default function initController(app: Express) {
    app.use('/api/setting',setting);
    app.use('/api/post',post);
}