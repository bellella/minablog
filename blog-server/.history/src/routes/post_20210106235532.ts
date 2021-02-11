import * as express from 'express'
import { Request, Response, Router } from 'express'


var router = Router();

router.get('/list', (req: Request, res: Response, next) => {
    postDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    })
});

export default router;
