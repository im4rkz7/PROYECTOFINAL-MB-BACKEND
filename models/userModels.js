import mongoose from "mongoose"; 

const userSchema = mongoose.Schema({
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    avatar: { type: String, required: false },
    role: { type: String, required: false },
});

const userModel = mongoose.model("user", userSchema);

export const User = userModel;