import 'module-alias/register'
import { MongoHelper } from '../repositories/helpers/mongodb/mongo-helper'
import env from './env'

MongoHelper.connect(env.mongodb.mongoUrl)
  .then(async () => {
    const app = (await import('./web/config/app')).default
    app.listen(env.app.port, () => console.log(`Server running at http://localhost:${env.app.port}`))
  })
  .catch(console.error)
