import { Request, Response, Router } from 'express'
import settingDAO from '../dao/setting.dao'

let router = Router();
/**
 * save a setting
 */
router.post('/', (req: Request, res: Response, next) => {
    settingDAO.save(req.body.setting)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});
/**
 * update a setting
 */
router.patch('/', (req: Request, res: Response, next) => {
    settingDAO.edit(req.body.setting)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});
/**
 * get settings
 */
router.get('/list', (req: Request, res: Response, next) => {
    settingDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});
/**
 * get setting with id if there isn't id, get selected one instead
 */
router.get('/:id', (req: Request, res: Response, next) => {
    settingDAO.view(req.params.id)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});


export default router;
