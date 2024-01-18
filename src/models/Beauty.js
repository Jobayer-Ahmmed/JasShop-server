import { Schema, model } from "mongoose";


const beautySchema= new Schema({
    type: {type:String},
    image : {type : String},
    size : {type : String},
    available_number: {type : Number},
    price : {type : Number},
    feedback:[]
})
const beautyModel = model("beautyCollection", beautySchema)

export default beautyModel