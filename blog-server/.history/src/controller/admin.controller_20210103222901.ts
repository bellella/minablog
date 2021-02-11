import { Resolver } from 'dns'
import { Request, Response, Router } from 'express'
import * as postDAO from '../dao/post.dao'

export const list = (req: Request, res: Response, next) => {
    postDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    })
}
