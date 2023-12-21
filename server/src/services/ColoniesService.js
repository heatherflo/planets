import { dbContext } from "../db/DbContext.js"


class ColoniesService {
  async createColony(colonyData) {
    const colony = await dbContext.Colony.create(colonyData)
    return colony
  }

}

export const coloniesService = new ColoniesService()