import { coloniesService } from "../services/ColoniesService.js"
import BaseController from "../utils/BaseController.js"



export class ColoniesController extends BaseController {
  constructor() {
    super('api/colonies')
    this.router
      .post('', this.createColony)
  }
  async createColony(request, response, next) {
    try {
      const colonyData = request.body
      const colonies = await coloniesService.createColony(colonyData)
      response.send(colonyData)
    } catch (error) {
      next(error)
    }
  }
}