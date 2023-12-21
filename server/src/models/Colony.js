import { Schema } from "mongoose"

export const ColonySchema = new Schema({
  name: { type: String, required: true, maxLength: 20 },
  population: { type: Number, required: true },
  planetId: { type: Schema.Types.ObjectId, ref: 'Colony', required: true },
  speciesId: { type: Schema.Types.ObjectId, ref: 'Species', required: true }
},
  { toJSON: { virtuals: true } }
)

ColonySchema.virtual('species', {
  localField: 'speciesId',
  foreignField: '_id',
  ref: 'Species',
  justOne: true
})

ColonySchema.virtual('planet', {
  localField: 'planetId',
  foreignField: '_id',
  ref: 'Planets',
  justOne: true,
})

//many to many relationship: colonies are the glue that connect species and planets together. There can be many colonies in a planet and many species in a colony. 

