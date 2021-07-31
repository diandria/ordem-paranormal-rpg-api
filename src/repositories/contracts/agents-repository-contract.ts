import { Agent } from '../../entities'

export interface AgentsRepository {
  add(agent: Agent): Promise<boolean>
}
