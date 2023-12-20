import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
  }
  async createPlanet(request, response, next) {
    try {
      const planetData = request.body
      const planet = await planetsService.createPlanets(planetData)
      response.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(request, response, next) {
    try {
      const planets = await planetsService.getPlanets()
      response.send(planets)
    } catch (error) {
      next(error)
    }
  }
}