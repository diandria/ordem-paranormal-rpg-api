import { TesteController } from '../../controllers/implementations/teste-controller'
import { MongoAgentsRepository } from '../../repositories/implementations/agents-repository/teste'
import { TesteUsecase } from '../../usecases/implementations/teste-usecase'

export const makeTesteController = (): TesteController => {
  const agentsRepository = new MongoAgentsRepository()
  const testeUsecase = new TesteUsecase({ agentsRepository })

  return new TesteController(testeUsecase)
}
