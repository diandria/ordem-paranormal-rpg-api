import { AgentsRepository } from '../../../../repositories/contracts'
import { AddAgent, AgentStatusTypes, AddAgentResponse, AddAgentDTO } from '../../../contracts/agents-contract'

type Dependencies = {
  agentsRepository: AgentsRepository
}

export class AddAgentUsecase implements AddAgent {
  private readonly agentsRepository: AgentsRepository

  constructor (dependencies: Dependencies) {
    this.agentsRepository = dependencies.agentsRepository
  }

  private result (status: AgentStatusTypes, name: string = null): AddAgentResponse {
    return { status, name }
  }

  async execute (dto: AddAgentDTO): Promise<any> {
    const agentAdded = await this.agentsRepository.add(dto.agent)
    if (!agentAdded) return this.result(AgentStatusTypes.error)
    return this.result(AgentStatusTypes.success, dto.agent.name)
  }
}
