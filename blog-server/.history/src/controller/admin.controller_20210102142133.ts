import { Request, Response, Router } from 'express'

class PostController {
    public path = '/posts';
    public router = Router();

    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(this.path, this.getAllPosts);
    }
  
    private getAllPosts = async (request: Request, response: Response) => {
      response.send();
    }

  }
  
export default PostController;