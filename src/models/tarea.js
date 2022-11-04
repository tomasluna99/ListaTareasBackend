import mongoose, { Schema } from "mongoose";
const tareaSchema = new Schema({
    laTarea: {
        type: String,
        required: true,
        unique: true,
        minLenght: 1,
        maxLenght: 100,
    },
});
const Tarea = mongoose.model("tarea", tareaSchema);

export default Tarea;
