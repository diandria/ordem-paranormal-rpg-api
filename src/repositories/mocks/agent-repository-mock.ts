import { Agent } from '../../entities'
import { AgentsRepository } from '../contracts'

export const mockAgentRepository = (): AgentsRepository => {
  class AgentRepositoryStub implements AgentsRepository {
    async add (agent: Agent): Promise<boolean> {
      return true
    }
  }

  return new AgentRepositoryStub()
}
