import { Schema } from "mongoose"

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  color: { type: String, required: true, maxLength: 15 },
  galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true }
},
  { toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
  localField: 'galaxyId',
  foreignField: '_id',
  ref: "Galaxies",
  justOne: true
})


//one to many relationship: there can be many planets in a galaxy but only one galaxy per planet. Also - there can be many colonies on a planet, but only planet for each colony. 