import { dbContext } from "../db/DbContext.js"




class GalaxiesService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)  //grab data from use(controller) and create info in the DB
    return galaxy //return info to controller so it can go back to the user 
  }


}

export const galaxiesService = new GalaxiesService()