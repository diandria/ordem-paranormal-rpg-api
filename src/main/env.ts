import { config } from 'dotenv'

config()

const app = {
  node: process.env.NODE_ENV,
  port: process.env.SERVER_PORT
}

const mongodb = {
  mongoUrl: process.env.MONGO_URL
}

const env = {
  app,
  mongodb
}

export default { ...env }
