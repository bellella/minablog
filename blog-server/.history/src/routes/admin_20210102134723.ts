import * as express from 'express'
import * as adminController from '../controller/admin.controller'

let router = express.Router();

router.get('/list', adminController.list);

router.get('/list', adminController.list);

router.get('/list', adminController.list);

module.exports = router;
