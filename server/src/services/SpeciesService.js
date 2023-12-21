import { dbContext } from "../db/DbContext.js"


class SpeciesService {
  async getSpecies(speciesData) {
    const species = await dbContext.Species.create(speciesData)
    return species
  }

}

export const speciesService = new SpeciesService()