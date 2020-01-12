import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Routes from './routes'
class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.midlawares()
    this.database()
    this.routes()
  }

  private midlawares (): void{
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database () : void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes () : void {
    this.express.use(Routes)
  }
}

export default new App().express
