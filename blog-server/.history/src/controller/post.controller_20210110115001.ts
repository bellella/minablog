import { Request, Response, Router } from 'express'
import postDAO from '../dao/post.dao'

let router = Router();

router.post('/', (req: Request, res: Response, next) => {
    postDAO.save(req.body)
    .then(r => {
        res.status(200).send();
    })
    .catch(e => {
        next(e);
    });
});

router.patch('/', (req: Request, res: Response, next) => {
    postDAO.edit(req.body)
    .then(r => {
        res.status(200).send();
    })
    .catch(e => {
        next(e);
    })
});

router.post('/:id', (req: Request, res: Response, next) => {
    postDAO.view(req.params.id)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    })
});

router.get('/list', (req: Request, res: Response, next) => {
    postDAO.getList()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.post('/list', (req: Request, res: Response, next) => {
    postDAO.searchList(req.body.data)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.get('/topN/list/:topN', (req: Request, res: Response, next) => {
    postDAO.getList(true, req.params.topN)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.get('/category/list/count', (req: Request, res: Response, next) => {
    postDAO.getCategoryListWithCount()
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.get('/category/list/:type', (req: Request, res: Response, next) => {
    postDAO.getCategoryList(req.params.type)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.patch('/category/list', (req: Request, res: Response, next) => {
    postDAO.editCategoryList(req.body.categoryList, req.body.deletedList)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});


router.get('/reply/list/:postId', (req: Request, res: Response, next) => {
    postDAO.getReplyList(req.params.postId)
    .then(r => {
        res.status(200).send(r);
    })
    .catch(e => {
        next(e);
    });
});

router.post('/reply', (req: Request, res: Response, next) => {
    const ip = ((req.headers['x-forwarded-for'] || '') as string).split(',')[0] 
    || req.connection.remoteAddress;
    postDAO.saveReply(req.body.reply, ip)
        .then(r => {
            res.status(200).send();
        })
        .catch(e => {
            next(e);
        });
});

router.get('/tag/list', (req: Request, res: Response, next) => {
        postDAO.getTagList()
            .then(r => {
                res.status(200).send(r);
            })
            .catch(e => {
                next(e);
            });
});
export default router;
