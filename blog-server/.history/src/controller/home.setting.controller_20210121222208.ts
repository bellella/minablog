import { Request, Response, Router } from 'express'
import settingDAO from '../dao/setting.dao'

let router = Router();

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


export default router;
