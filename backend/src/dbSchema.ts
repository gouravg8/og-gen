import { model, Schema } from "mongoose";

const DataSchema = new Schema({
    title: String,
    description: String,
    imageUri: String,
    postUri: String
});

const Data = model("Data", DataSchema);

export default Data;