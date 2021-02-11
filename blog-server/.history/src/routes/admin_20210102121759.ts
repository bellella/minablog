import { Express } from 'express'

export function routes(app: Express) {

    app.get('/',(res,req) => {
        console.log('kyuyuyu')
    })
  }