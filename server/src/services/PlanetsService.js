import { dbContext } from "../db/DbContext.js"
import { galaxiesService } from "./GalaxiesService.js"



class PlanetService {
  async createPlanets(planetData) {
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }
  async getPlanets() {
    const planets = dbContext.Planet.find()
    return planets
  }

  async getOnePlanet(planetId) {
    const onePlanet = await dbContext.Planet.findById(planetId)
    return onePlanet
  }
  async getPlanetsFromGalaxies(galaxyId) {
    await galaxiesService.getOneGalaxy(galaxyId)
    const planets = await dbContext.Planet.find({ galaxyId: galaxyId })
    return planets
  }
}

export const planetsService = new PlanetService()