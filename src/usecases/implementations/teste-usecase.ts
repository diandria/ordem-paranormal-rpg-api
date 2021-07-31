import { Teste } from '../contracts/teste-contract'

export class TesteUsecase implements Teste {
  execute (): any {
    return {
      name: 'diandria'
    }
  }
}
