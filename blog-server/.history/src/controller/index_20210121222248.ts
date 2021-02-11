import { Express, Request, Response, Router } from 'express'
import setting from './setting.controller'
import post from './post.controller'
import homeSetting from './home.setting.controller'
let router = Router();

router.use('/setting',setting);
router.use('/post',post);
router.use('/setting/home',homeSetting);
export default router;