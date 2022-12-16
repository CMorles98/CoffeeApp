 
import cors from 'cors';
import express from 'express'

import { connectToMongoDB } from './databases/mongoDB.config';

class Server {
  public app
  private port

  private authPath

  constructor() {

    this.app = express();
    this.port = process.env.PORT;

    this.authPath = '/api/v1/auth'

    this.configDb();

    this.middlewares();

    this.routes();
  }

  private configDb = async (): Promise<void> => {

    await connectToMongoDB();

  }

  private middlewares = (): void => {

    this.app.use(express.json())

    this.app.use(cors())


  }

  private routes = (): void => {
    ///TODO: Add routes with controllers classes 


  }

  public listen = (): void => {

    this.app.listen(this.port, () => {
      return console.log(`server is listening on ${this.port}`)
    })
  }
}

export {
  Server
}