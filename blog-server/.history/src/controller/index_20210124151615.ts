import { Express, Request, Response, Router } from 'express'
import setting from './setting.controller'
import post from './post.controller'
import homeSetting from './home.setting.controller'
import upload from './upload.controller'
let router = Router();

router.use('/setting',setting);
router.use('/post',post);
router.use('/setting/home',homeSetting);
router.use('/upload',upload);
export default router;