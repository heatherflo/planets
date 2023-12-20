import { Schema } from "mongoose"

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  color: { type: String, required: true, maxLength: 15 },
  galaxiesId: { type: Schema.Types.ObjectId, ref: 'Galaxy, required: true}' }
},
  { toJSON: { virtuals: true } }
)