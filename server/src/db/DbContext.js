import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { GalaxySchema } from '../models/Galaxy.js';
import { PlanetSchema } from '../models/Planet.js';
import { SpeciesSchema } from '../models/Species.js';
import { ColonySchema } from '../models/Colony.js';


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema)

  Planet = mongoose.model('Planet', PlanetSchema)

  Species = mongoose.model('Species', SpeciesSchema)

  Colony = mongoose.model('Colony', ColonySchema)
}

export const dbContext = new DbContext()
