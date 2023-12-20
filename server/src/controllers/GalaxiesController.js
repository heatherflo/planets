import { response } from "express";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";
import { Logger } from "../utils/Logger.js";



export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      // console.log('is this working?')
      .post('', this.createGalaxy)
      .get('', this.getGalaxy)
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

}