import { Request, Response, Router } from 'express'
import postDAO from '../dao/post.dao'

let router = Router();
/**
 * save a post
 */
router.post('/', (req: Request, res: Response, next) => {
    postDAO.save(req.body)
        .then(r => {
            res.status(200).send();
        })
        .catch(e => {
            next(e);
        });
});
/**
 * update a post
 */
router.patch('/', (req: Request, res: Response, next) => {
    postDAO.edit(req.body)
        .then(r => {
            res.status(200).send();
        })
        .catch(e => {
            next(e);
        })
});
/**
 * get posts
 */
router.get('/list', (req: Request, res: Response, next) => {
    postDAO.getList(req.params.isAdmin === 'true')
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * get a post
 */
router.get('/view/:id', (req: Request, res: Response, next) => {
    postDAO.view(req.params.id)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        })
});
/**
 * serach posts by a category id
 */
router.get('/list/category/:categoryId', (req: Request, res: Response, next) => {
    postDAO.categorizedList(parseInt(req.params.categoryId))
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * serach posts by keyword or tag
 */
router.get('/list/:type/:value', (req: Request, res: Response, next) => {
    postDAO.searchList(req.params.type, req.params.value)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

/**
 * search top N posts
 */
router.get('/topN/list/:topN', (req: Request, res: Response, next) => {
    postDAO.limitedList(true, parseInt(req.params.topN))
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

/**
 * search recommended posts
 */
router.post('/recommend/list', (req: Request, res: Response, next) => {
    postDAO.recommendList(req.body.postId, req.body.tagList, req.body.categoryId)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});

/**
 * get categories with their counts
 */
router.get('/category/list', (req: Request, res: Response, next) => {
    postDAO.getBlogCategoryList()
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * get category list
 */
router.get('/admin/category/list', (req: Request, res: Response, next) => {
    postDAO.getAdminCategoryList(req.params.type)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * edit category list
 */
router.patch('/category/list', (req: Request, res: Response, next) => {
    postDAO.editCategoryList(req.body.categoryList, req.body.deletedList)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * get replies 
 */
router.get('/reply/list/:postId', (req: Request, res: Response, next) => {
    postDAO.getReplyList(req.params.postId)
        .then(r => {
            res.status(200).send(r);
        })
        .catch(e => {
            next(e);
        });
});
/**
 * save a reply
 */
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
/**
 * get tag lists
 */
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
