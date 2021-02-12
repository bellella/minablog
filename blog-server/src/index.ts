import * as express from "express"
import * as bodyParser from 'body-parser';
import * as path from 'path';
import controller from './controller'

import * as dotenv from 'dotenv'
import SqlConnection from './sql/sqlConnection'
import { logger, stream } from './configs/winston'
import * as morgan from 'morgan'
class App {
  public application : express.Application;

  private app: express.Application = express();
  private PORT: any = process.env.PORT || 3000;

  constructor(){
    this.setting(this.app);
    this.app.listen(this.PORT,()=>console.log(`The server has just started. port: ${this.PORT}`));
    logger.info(`${new Date().toISOString}`, this.PORT,'port....');
  }

  public setting(app) {
        let envConfig = dotenv.config({ path: path.join(__dirname, '.env') });
        for (var k in envConfig) {
            process.env[k] = envConfig[k]
        }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('combined', { stream }));
    app.use('/s/images', express.static(__dirname+'/uploads'));
    app.use('/api',controller);
    app.use((err, req, res, next) => {
      const errObj = {
        req: {
          headers: req.headers,
          query: req.query,
          body: req.body,
          route: req.route
        },
        error: {
          message: err.message,
          stack: err.stack,
          status: err.status
        }
      }

      logger.error(`${new Date().toISOString}`, errObj);
      next(err);
    });
    SqlConnection.initSql();
  }
}

new App();
