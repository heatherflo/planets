import { dbContext } from "../db/DbContext.js"



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
}

export const planetsService = new PlanetService()