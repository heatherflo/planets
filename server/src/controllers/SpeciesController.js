import { speciesService } from "../services/SpeciesService.js";
import BaseController from "../utils/BaseController.js";



export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .post('', this.createSpecies)
  }
  async createSpecies(request, response, next) {
    try {
      const speciesData = request.body
      const species = await speciesService.getSpecies(speciesData)
      response.send(species)
    } catch (error) {
      next(error)
    }
  }

}