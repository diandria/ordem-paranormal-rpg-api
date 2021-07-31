import { HttpController, HttpRequest, HttpResponse } from '../../contracts'
import { success, serverError } from '../../helpers/http-helpers'
import { AddAgent } from '../../../usecases/contracts'

export class AddAgentController implements HttpController {
  constructor (
    private readonly addAgentUsecase: AddAgent
  ) { }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = request
      const result = await this.addAgentUsecase.execute({ agent: body })
      return success(result)
    } catch (error) {
      console.error('[ERROR] Add Agent: ', error)
      return serverError(error)
    }
  }
}
