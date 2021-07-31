import { Router } from 'express'
import { makeAddAgentController } from '../../factories'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/agent/add', adaptRoute(makeAddAgentController()))
}
