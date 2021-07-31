import { Agent } from '../../entities/'

export enum AgentStatusTypes {
  error = 'ERROR',
  success = 'SUCCESS'
}

export type AddAgentDTO = {
  agent: Agent
}

export type AddAgentResponse = {
  status: AgentStatusTypes
  name: string
}

export interface AddAgent {
  execute: (dto: AddAgentDTO) => Promise<AddAgentResponse>
}
