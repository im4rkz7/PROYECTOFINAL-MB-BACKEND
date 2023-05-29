import { Schema, model } from "mongoose";
 
const orderSchema = new Schema({
    userId: { type: String, required: true },
    product: { type: Array },
    creationDate: { type : Date, default: Date.now },
    status: { type: String, default: 'generated' }
});

const orderModel = model("order", orderSchema);


export const Order = orderModel;
