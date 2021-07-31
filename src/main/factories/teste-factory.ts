import { TesteController } from '../../controllers/implementations/teste-controller'
import { TesteUsecase } from '../../usecases/implementations/teste-usecase'

export const makeTesteController = (): TesteController => {
  const testeUsecase = new TesteUsecase()

  return new TesteController(testeUsecase)
}
