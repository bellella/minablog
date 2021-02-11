import { Express } from 'express'

export function (app: Express) {
    app.get('/',(res,req) => {
        console.log('kyuyuyu')
    })
  }