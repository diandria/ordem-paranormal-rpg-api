import { AddAgentController } from '../../../controllers/implementations'
import { MongoHelper } from '../../../repositories/helpers/mongodb/mongo-helper'
import { MongoAgentsRepository } from '../../../repositories/implementations/agents-repository/mongo-agents-repository'
import { AddAgentUsecase } from '../../../usecases/implementations'

export const makeAddAgentController = (): AddAgentController => {
  const agentsRepository = new MongoAgentsRepository(MongoHelper, { collection: 'agents' })
  const addAgentUsecase = new AddAgentUsecase({ agentsRepository })

  return new AddAgentController(addAgentUsecase)
}
