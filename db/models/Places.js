import mongoose from "mongoose";

const { Schema } = mongoose;

const placesSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: URL, required: true },
  mapURL: { type: URL, required: true },
  description: { type: String, required: true },
});

const Places = mongoose.models.Review || mongoose.model("Places", placesSchema);

export default Places;
