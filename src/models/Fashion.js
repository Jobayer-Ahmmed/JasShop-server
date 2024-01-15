import { Schema, model } from "mongoose";

const fashionSchema = new Schema({
    type: {type:String},
    image : {type : String},
    size : {type : String},
    available_number: {type : Number},
    price : {type : Number},
    feedback:[]
   
})

const fashionModel = model("fashionCollection", fashionSchema)    // model = collection
export default fashionModel