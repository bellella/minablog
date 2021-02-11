import { Express, Request, Response, Router } from 'express'
import setting from './setting.controller'
import post from './post.controller'

let router = Router();

router.use('/setting',setting);
router.use('/post',post);

export default router;

// export default function initController(app: Express) {
//     app.use('/api/setting',setting);
//     app.use('/api/post',post);
// }