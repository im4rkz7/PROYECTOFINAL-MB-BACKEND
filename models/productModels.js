import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  category: { type: String, required: true },
  description: {type: String, required: true},
  stock: { type: Number, required: true },
});

const productModel = model("product", productSchema);

export const Product = productModel;

