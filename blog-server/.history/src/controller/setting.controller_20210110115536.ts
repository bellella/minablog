import { Request, Response, Router } from 'express'
import blogSettingDAO from '../dao/post.dao'

let router = Router();

router.post('/', (req: Request, res: Response, next) => {
    blogSettingDAO.create(req.body.setting)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.patch('/', (req: Request, res: Response, next) => {
    blogSettingDAO.edit(req.body.setting)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.get('/:id', (req: Request, res: Response, next) => {
    blogSettingDAO.view(req.params.id)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.get('/list', (req: Request, res: Response, next) => {
    blogSettingDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

export default router;
