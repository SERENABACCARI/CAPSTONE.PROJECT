import mongoose, { model, Schema } from "mongoose";

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confermaPassword: {
        type: String,
        required: true
    },
    
});

export const Registrer = mongoose.model("Registrer", registerSchema);