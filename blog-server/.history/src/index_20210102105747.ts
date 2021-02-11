import * as express from "express"
class App {
  public application : express.Application;

  private app: express.Application;
  private PORT: any = process.env.PORT || 3000;

  constructor(){
    this.app = express();
    this.app.get("/",(req : express.Request , res : express.Response) =>{
      res.send("start");
    })
    this.app.listen(4000,()=>console.log("start"));
  }
}

new App();
