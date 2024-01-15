import { Schema, model } from "mongoose";


const cartSchema = new Schema({
    email: {type: String, required: true},
    type: {type: String},
    image: {type: String},
    size: {type: String},
    price: {type: Number}
})

const cartModel = model("cartCollectioin", cartSchema)
export default cartModel