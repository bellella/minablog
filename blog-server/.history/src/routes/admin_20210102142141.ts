import * as express from 'express'
import * as adminController from '../controller/admin.controller'

var router = express.Router();

router.get('/list', adminController.list);

router.get('/list', adminController.list);

router.get('/list', adminController.list);

export default router;
