import { Schema, model } from "mongoose";
 
const messageSchema = new Schema({
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    textmessage: { type: String, required: true },
    sendtime: { type : Date, default: Date.now },
    avatar: { type: String, required: false },
});

const messageModel = model("message", messageSchema);


export const Message = messageModel;

