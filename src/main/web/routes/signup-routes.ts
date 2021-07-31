import { Router } from 'express'
import { makeTesteController } from '../../factories/teste-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.get('/teste', adaptRoute(makeTesteController()))
}
