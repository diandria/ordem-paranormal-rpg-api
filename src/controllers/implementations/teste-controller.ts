import { Teste } from '../../usecases/contracts/teste-contract'
import { HttpController, HttpResponse } from '../contracts'
import { success, serverError } from '../helpers/http-helpers'

export class TesteController implements HttpController {
  constructor (
    private readonly teste: Teste
  ) { }

  // eslint-disable-next-line @typescript-eslint/require-await
  async handle (): Promise<HttpResponse> {
    try {
      const result = this.teste.execute()
      return success(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
