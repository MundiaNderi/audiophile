import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  mobile: { type: String, required: true },
  desktop: { type: String, required: true }
});

const includeSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  item: { type: String, required: true }
});

const audioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: imageSchema, required: true },
  category: { type: String, required: true },
  includes: [includeSchema],
  features: { type: String, required: true }
});

const audioModel = mongoose.models.audio || mongoose.model("audio", audioSchema);

export default audioModel;
