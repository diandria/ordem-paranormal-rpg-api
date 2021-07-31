import { Agent } from '../../../entities'
import { AgentsRepository } from '../../contracts'
// import { MongoHelper } from '../../helpers/mongodb/mongo-helper'

type Config = {
  collection: string
}

export class MongoAgentsRepository implements AgentsRepository {
  constructor (
    private readonly mongodb: any,
    private readonly config: Config
  ) { }

  async add (agent: Agent): Promise<boolean> {
    const accountCollection = await this.mongodb.getCollection(this.config.collection)
    const result = await accountCollection.insertOne(agent)

    if (!this.mongodb.map(result.ops[0])) {
      return false
    }
    return true
  }
}
