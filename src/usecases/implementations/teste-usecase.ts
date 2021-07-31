import { AgentsRepository } from '../../repositories/contracts/agents-repository-contract'
import { Teste } from '../contracts/teste-contract'

type Dependencies = {
  agentsRepository: AgentsRepository
}

export class TesteUsecase implements Teste {
  private readonly agentsRepository: AgentsRepository

  constructor (dependencies: Dependencies) {
    this.agentsRepository = dependencies.agentsRepository
  }

  async execute (): Promise<any> {
    const result = await this.agentsRepository.add()

    if (!result) return { status: 'FAILED', result: null }
    return {
      status: 'SUCCESS',
      result: result
    }
  }
}
