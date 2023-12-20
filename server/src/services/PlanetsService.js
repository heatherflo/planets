import { dbContext } from "../db/DbContext.js"



class PlanetService {
  async createPlanets(planetData) {
    const planet = await dbContext.Planet.create(planetData)
    return planet
  }

}

export const planetsService = new PlanetService()