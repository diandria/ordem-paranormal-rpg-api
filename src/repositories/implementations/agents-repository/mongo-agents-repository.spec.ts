import env from '../../../main/env'
import { MongoHelper } from '../../helpers/mongodb/mongo-helper'
import { MongoAgentsRepository } from './mongo-agents-repository'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongodb.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('agents')
    await accountCollection.deleteMany({})
  })

  const makeSut = (): MongoAgentsRepository => {
    return new MongoAgentsRepository(MongoHelper, { collection: 'agents' })
  }

  test('Shoult create an agent', async () => {
    const sut = makeSut()
    const createdAgent = await sut.add({
      name: 'any_name',
      birthDate: 'any_date',
      deadDate: 'any_date',
      alive: true,
      seasons: ['any_season']
    })
    expect(createdAgent).toBe(true)
  })
})
