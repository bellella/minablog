import * as express from 'express'
import * as postDAO from '../dao/post.dao'

var router = express.Router();

router.get('/list', (req: Request, res: Response, next) => {
    postDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    })
});

export default router;
