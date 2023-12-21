import { response } from "express";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { Logger } from "../utils/Logger.js";
import { planetsService } from "../services/PlanetsService.js";



export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      // console.log('is this working?')
      .post('', this.createGalaxy)
      .get('', this.getGalaxy)
      .get('/:galaxyId', this.getOneGalaxy)
      .get('/:galaxyId/planets', this.getPlanetsFromGalaxies)
  }
  async createGalaxy(request, response, next) {
    try {
      const galaxyData = request.body   //request the body from the user and call it a variableData 
      const galaxy = await galaxiesService.createGalaxy(galaxyData)   //send that body to the service 
      response.send(galaxy)  //get a response and send it to the user again
    } catch (error) {
      next(error)
    }
  }
  async getGalaxy(request, response, next) {
    try {
      const galaxies = await galaxiesService.getGalaxy()
      response.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getOneGalaxy(request, response, next) {
    try {
      const galaxyId = request.params.galaxyId
      const galaxy = await galaxiesService.getOneGalaxy(galaxyId)
      response.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsFromGalaxies(request, response, next) {
    try {
      const galaxyId = request.params.galaxyId //requesting each planet by the Id that is attached to the galaxy and filtering that way 
      const planets = await planetsService.getPlanetsFromGalaxies(galaxyId) //requesting them from the planetsService bc that is where they are changing/updating 
      response.send(planets)
    } catch (error) {
      next(error)
    }
  }
}