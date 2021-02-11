import { Request, Response, Router } from 'express'
import * as multer from 'multer'

let upload = multer({
    dest: 'uploads/' ,
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'src/uploads/');
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
      }
    }),
  });

let router = Router();
/**
 * save a setting
 */
router.post('/image', upload.single('file'), (req: Request, res: Response, next) => {
    var imageUrl = req.protocol + '://' + req.get('host') + '/s/images/' +  req.file.filename;
    console.log(imageUrl);
    res.status(200).send({imageUrl});
});



export default router;
