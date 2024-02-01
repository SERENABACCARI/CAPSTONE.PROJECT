
import mongoose, { model,Schema} from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
});

export const User = mongoose.model("User", UserSchema);


