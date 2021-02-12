import { Request, Response, Router } from 'express'
import * as multer from 'multer'
import { logger } from '../configs/winston';

let upload = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
      let mimeType;
      switch (file.mimetype) {
        case "image/jpeg":
          mimeType = "jpg";
          break;
        case "image/png":
          mimeType = "png";
          break;
        case "image/gif":
          mimeType = "gif";
          break;
        case "image/bmp":
          mimeType = "bmp";
          break;
        default:
          mimeType = "jpg";
          break;
      }

      cb(null, file.fieldname + '-' + Date.now() + '.' + mimeType);
    }
  }),
});

let router = Router();
/**
 * save a setting
 */
router.post('/image', upload.single('file'), (req: any, res: Response, next) => {
  //var imageUrl = req.protocol + '://' + req.get('host') + '/s/images/' +  req.file.filename;
  try {
    var imageUrl = '/s/images/' + req.file.filename;
    res.status(200).send({ imageUrl });
  } catch (e) {
    logger.error(`${new Date().toISOString}`, e, 'upload');
    next(e);
  };



export default router;
