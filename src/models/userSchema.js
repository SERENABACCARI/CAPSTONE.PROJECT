//schema utenti del form contact del front//
import mongoose,{Model,Schema} from "mongoose";

const UserSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    numeroTelefonico: {
        type: String,
        required: true
    },
    messaggio: {
        type: String,
        required: true
    }
});

export const User = mongoose.model("User", UserSchema);


