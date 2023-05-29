import { Schema, model } from "mongoose";
 
const cartSchema = new Schema({
    userId: { type: String, required: true },
    product: { type: Array },
});

const cartModel = model("cart", cartSchema);


export const Cart = cartModel;

