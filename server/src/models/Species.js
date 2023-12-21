import { Schema } from "mongoose"

export const SpeciesSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  height: { type: Number, required: true },
  colonyId: { type: Schema.Types.ObjectId, ref: 'Species', required: true }
},
  { toJSON: { virtuals: true } }
)

//one to many relationship: there can only be one colony per species but there can be many species inside a colony. 