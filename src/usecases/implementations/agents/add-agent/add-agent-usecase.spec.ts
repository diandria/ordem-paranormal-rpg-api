import { AgentsRepository } from '../../../../repositories/contracts'
import { mockAgentRepository } from '../../../../repositories/mocks'
import { throwError } from '../../../../shared/test'
import { AgentStatusTypes } from '../../../contracts'
import { mockAddAgentDTO } from '../../../mocks'
import { AddAgentUsecase } from './add-agent-usecase'

type SutTypes = {
  sut: AddAgentUsecase
  agentsRepository: AgentsRepository
}

const makeSut = (): SutTypes => {
  const agentsRepository = mockAgentRepository()

  const sut = new AddAgentUsecase({ agentsRepository })

  return {
    sut,
    agentsRepository
  }
}

describe('Add Agent Usecase', () => {
  test('Should call agentsRepository', async () => {
    const { sut, agentsRepository } = makeSut()
    const addSpy = jest.spyOn(agentsRepository, 'add')
    await sut.execute(mockAddAgentDTO())
    expect(addSpy).toBeCalledTimes(1)
    expect(addSpy).toBeCalled()
  })

  test('Should call agentsRepository with correct values', async () => {
    const { sut, agentsRepository } = makeSut()
    const respondentSpy = jest.spyOn(agentsRepository, 'add')
    const request = mockAddAgentDTO()
    await sut.execute(request)
    expect(respondentSpy).toBeCalledWith(request.agent)
  })

  test('Should throw if agentsRepository throws', async () => {
    const { sut, agentsRepository } = makeSut()
    jest.spyOn(agentsRepository, 'add').mockImplementationOnce(throwError)
    const promise = sut.execute(mockAddAgentDTO())
    await expect(promise).rejects.toThrow()
  })

  test('Should verify if agentsRepository returned expected values', async () => {
    const { sut } = makeSut()
    const result = await sut.execute(mockAddAgentDTO())
    expect(result.status).not.toBe(AgentStatusTypes.error)
  })

  test('Should verify if agentsRepository did not return expected values', async () => {
    const { sut, agentsRepository } = makeSut()
    jest.spyOn(agentsRepository, 'add').mockResolvedValueOnce(false)
    const result = await sut.execute(mockAddAgentDTO())
    expect(result.status).toBe(AgentStatusTypes.error)
  })

  test('Should return success if it succeeds', async () => {
    const { sut } = makeSut()
    const request = mockAddAgentDTO()
    const result = await sut.execute(request)
    expect(result).toEqual({ status: AgentStatusTypes.success, name: request.agent.name })
  })
})
