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
    try {
      this.setting(this.app);
    }catch(e) {
      logger.info('error from setting',e);
      console.log('error is ocurrend while setting')
    }
    this.app.listen(this.PORT,()=>console.log(`The server has just started. port: ${this.PORT}`));
    logger.info(`${this.PORT} port is now started`);
  }

  public setting(app) {
        let envConfig = dotenv.config({ path: path.join(__dirname, '.env') });
        for (var k in envConfig) {
            process.env[k] = envConfig[k]
        }
        logger.info('1');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(morgan('combined', { stream }));
    logger.info('2');
    app.use('/s/images', express.static(__dirname+'/uploads'));
    app.use('/api',controller);
    logger.info('3');
    // app.use((err, req, res, next) => {
    //   const errObj = {
    //     req: {
    //       headers: req.headers,
    //       query: req.query,
    //       body: req.body,
    //       route: req.route
    //     },
    //     error: {
    //       message: err.message,
    //       stack: err.stack,
    //       status: err.status
    //     }
    //   }

    //   logger.error(`error is ocuured..`, errObj);
    //   next(err);
    // });
    logger.info('4');
    SqlConnection.initSql();
    logger.info('5');
  }
}

new App();
