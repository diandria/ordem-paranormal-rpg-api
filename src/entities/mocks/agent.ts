import { Agent } from '../agent/agent'

export const mockAgent = (): Agent => {
  return {
    name: 'any_name',
    birthDate: 'any_date',
    deadDate: 'any_date',
    alive: true,
    seasons: ['any_season']
  }
}
