import { Request, Response, Router } from 'express'
import homeSettingDAO from '../dao/homeSetting.dao'

let router = Router();

/**
 * get settings
 */
router.get('/list', (req: Request, res: Response, next) => {
    homeSettingDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});


export default router;
