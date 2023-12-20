import { dbContext } from "../db/DbContext.js"




class GalaxiesService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)  //grab data from use(controller) and create info in the DB
    return galaxy //return info to controller so it can go back to the user 
  }

  async getGalaxy() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }

  async getOneGalaxy(galaxyId) {
    const galaxy = await dbContext.Galaxy.findById(galaxyId)
    if (!galaxy) {
      throw new Error('could not find galaxy')
    }
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()