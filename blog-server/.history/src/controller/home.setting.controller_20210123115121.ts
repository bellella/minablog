import { Request, Response, Router } from 'express'
import homeSettingDAO from '../dao/homeSetting.dao'
import homeSettingService from '../service/homeSetting.service';

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

/**
 * save a setting
 */
router.post('/', (req: Request, res: Response, next) => {
    homeSettingDAO.save(req.body.setting)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

/**
 * get post lists from setting
 */
router.get('/posts', (req: Request, res: Response, next) => {
    homeSettingService.getSetPosts()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

export default router;
