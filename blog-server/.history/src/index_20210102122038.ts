import * as express from "express"
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { allowedNodeEnvironmentFlags } from "process";
import * as routes from './routes'


class App {
  public application : express.Application;

  private app: express.Application = express();
  private PORT: any = process.env.PORT || 3000;

  constructor(){
    //this.app = express();

    this.app.get("/",(req : express.Request , res : express.Response) =>{
      res.send("start");
    })
  
    this.app.listen(4000,()=>console.log("start"));
  }

  public setting(app) {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/s/images', express.static(__dirname+'/uploads'));
    routes.initRoutes(app);
  }
}

new App();
