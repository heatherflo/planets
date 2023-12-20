import { Schema } from "mongoose"


export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  type: { type: String, required: true, maxLength: 30 }
})
