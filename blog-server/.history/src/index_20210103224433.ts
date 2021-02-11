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
    this.setting(this.app);
    this.app.listen(4000,()=>console.log("start"));

  }

  public setting(app) {
    const fs = require('fs');
    const dotenv = require('dotenv');
    const crossenv = require('cross-env');
    if (process.env.NODE_ENV == 'dev' || process.env.NODE_ENV == 'local') {
        let envConfig = dotenv.config({ path: path.join(__dirname, '.env') });
        for (var k in envConfig) {
            process.env[k] = envConfig[k]
        }
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/s/images', express.static(__dirname+'/uploads'));
    routes.initRoutes(app);
  }
}

new App();
