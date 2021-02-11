import * as express from 'express'
import { adminController } from '../controller'

var router = express.Router();

router.get('/list', adminController.list);

export default router;
