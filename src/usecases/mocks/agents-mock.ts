import { mockAgent } from '../../entities/mocks/agent'
import { AddAgentDTO } from '../contracts'

export const mockAddAgentDTO = (): AddAgentDTO => ({
  agent: mockAgent()
})
