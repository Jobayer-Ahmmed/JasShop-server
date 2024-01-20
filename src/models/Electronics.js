import { Schema, model } from "mongoose";


const electronicsSchema = new Schema({
    type: {type:String},
    image : {type : String},
    size : {type : String},
    available_number: {type : Number},
    price : {type : Number},
    feedback:[]
})

const electronicsModel = model("electronicsCollection", electronicsSchema)

export default electronicsModel